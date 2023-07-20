import React, { useEffect } from 'react';

// @ts-ignore
const { kakao } = window; // window 전역 객체 component에 인식시켜줘야 함
let centerspot = '한성대학교' // 중간 지점 계산 알고리즘 작성 끝나면 '한성대학교' string 계산된 중간 지점으로 수정

function Maps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // 마커 클릭하면 장소 이름 내보낼 infowindow
        let infowindow = new kakao.maps.InfoWindow({zIndex: 1});

        let mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도 생성
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 장소 검색 객체 생성
        const ps = new kakao.maps.services.Places();

        // 키워드로 장소 검색
        ps.keywordSearch(centerspot, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 callback function
        function placesSearchCB(data: string | any[], status: any, pagination: any) {
            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정
                // LatLngBounds 객체에 좌표 추가
                let bounds = new kakao.maps.LatLngBounds();

                for (const element of data) {
                    displayMarker(element);
                    bounds.extend(new kakao.maps.LatLng(element.y, element.x));
                }

                // 검색된 장소 위치 기준으로 지도 범위를 재설정, 가장 유사도 높은 하나로 변경?
                map.setBounds(bounds);
            }
        }

        // 지도에 마커 표시
        function displayMarker(place: { y: any; x: any; place_name: string; }) {

            // 마커 생성하고 지도에 표시
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            // 마커에 클릭이벤트 등록
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커 클릭하면 장소 이름 infowindow에 output
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }
    }, []) // 지도 띄울 빈 객체

    return (
        <div id="map" style={{
        width: '100%',
        height: '100vh'
        }}></div>
    )
}

export default Maps;