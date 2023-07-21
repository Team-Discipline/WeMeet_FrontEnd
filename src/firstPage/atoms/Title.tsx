import styled from "styled-components";

const TitleText = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20%;
`;
const Title = () => {
    return (
        <TitleText>
            <Span>
                출발지를 입력하고<br/>중간장소를 찾아보세요!
            </Span>
        </TitleText>
    )
}

export default Title;