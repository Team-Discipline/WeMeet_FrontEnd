import styled from "styled-components";

const ButtonBox = styled.div`
  height: 48px;
  background: var(--C08);
  margin: 16px 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 12px;
`;

const Button = styled.button`
  color: white;
  font-size: 100%;
  background-color: #3c9aff;
  width: 95%;
  height: 100%;
  border-radius: 15px;
  border-style: none;
`;

const WhiteBoxButton = () => {
    const findLocation = () => {
        console.log("백에 장소를 보내주고 중간 지점 위치들 받아오기");
        window.location.replace("/result");
    }
    return (
        <ButtonBox>
            <Button onClick={findLocation}>중간장소 찾기</Button>
        </ButtonBox>
    )
}

export default WhiteBoxButton;