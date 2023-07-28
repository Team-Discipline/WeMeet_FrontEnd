import styled from "styled-components";

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  height: 128px;
  align-content: center;
  vertical-align: middle;
  align-items: center;

`;
const Title = () => {
    return (
        <TitleText>
            <h4>
                출발지를 입력하고<br/>중간장소를 찾아보세요!
            </h4>
        </TitleText>
    )
}

export default Title;