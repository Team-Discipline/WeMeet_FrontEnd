import styled from "styled-components";
import location from "../img/ic_mylocation.svg";

const Container = styled.div`
  width: 95%;
  height: 5%;
  margin-top: 2%;
  background-color: #F5F9FF;
  border: solid 1px #4683FF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Span = styled.span`
  color: #4683FF;
  margin-left: 1%;
`;
const MyLocation = () => {
    const loadingMyLocation = () => {

    }
    return (
        <Container onClick={loadingMyLocation}>
            <img src={location}/>
            <Span>내 위치 불러오기</Span>
        </Container>
    )
}

export default MyLocation;