import React from 'react';
import Kakao from './KakaoMap';
import styled from "styled-components";
import PlaceList from "./PlaceList";
const ResultPage = () => {

  return (
      <div>
        <h3>중간장소 결과 보기</h3>
      <MapContainer>
        <Kakao />
        <ListContainer>
          <PlaceList />
        </ListContainer>
      </MapContainer>
      </div>

  );
}
const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const ListContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #f1f1f1;
`;
export default ResultPage