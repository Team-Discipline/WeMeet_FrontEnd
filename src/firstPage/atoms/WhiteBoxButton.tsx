import styled from "styled-components";

const ButtonBox = styled.div`
  width: 100%;
  height: 10%;
  padding: 5%;
`;

const Button = styled.button`
  color: white;
  font-size: 100%;
  background-color: #3c9aff;
  width: 95%;
  height: 5vh;
  border-radius: 15px;
  border-style: none;
`;

const WhiteBoxButton = () => {
    const findLocation = () => {
        console.log("백에 장소를 보내주고 중간 지점 위치들 받아오기");
    }
    return (
        <ButtonBox>
            <Button onClick={findLocation}>중간장소 찾기</Button>
        </ButtonBox>
    )
}

export default WhiteBoxButton;