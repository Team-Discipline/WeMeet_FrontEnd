import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 2%;
`;
const RandomLocation = () => {
    const randomPlace = () => {
        console.log("리스트에서 값들 랜덤으로 추출");
    }
    return (
        <Container>
            <span onClick={randomPlace}>
                랜덤으로 중간 지점 찾기
            </span>
        </Container>
    )
}

export default RandomLocation;