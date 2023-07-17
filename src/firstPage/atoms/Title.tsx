import styled from "styled-components";

const TitleText = styled.div`
  width: 60%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10% 0 5% 0;
`;
const Title = () => {
    return (
        <TitleText>
            <span>
                출발지를 입력하고<br/>중간장소를 찾아보세요!
            </span>
        </TitleText>
    )
}

export default Title;