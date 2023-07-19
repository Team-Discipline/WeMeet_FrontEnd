import styled from "styled-components";

const OverlaySearchContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  font-size: 100%;
  background-color: #F6F6F6;
  border-style: none;
  padding: 5px;
`;

const OverlaySearch = () => {
    return (
        <OverlaySearchContainer>
            <Input placeholder="출발 위치를 입력해주세요"></Input>
        </OverlaySearchContainer>
    )
}

export default OverlaySearch;