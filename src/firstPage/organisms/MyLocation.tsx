import styled from "styled-components";
import mylocation from "../img/ic_mylocation.svg";
import useGeolocation from "./useGeolocation";

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
  margin-left: 0.3%;
`;

// 이하 코드 동일

const MyLocation = () => {
    const location = useGeolocation();
    const loadLocation = () => {
        console.log(JSON.stringify(location))
    }
    return (
        <Container onClick={loadLocation}>
            <img src={mylocation} alt=""/>
            <Span>내 위치 불러오기</Span>
        </Container>
    );
};

export default MyLocation;
