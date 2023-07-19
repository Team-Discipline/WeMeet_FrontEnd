import styled from "styled-components";

const Serching = styled.div`
  width: 5%;
  height: 80%;
  font-size: 100%;
  color: #4683FF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayHeaderSerching = () => {
    const searchLocation = () => {

    }
    return (
        <Serching onClick={searchLocation}>
            검색
        </Serching>
    )
}

export default OverlayHeaderSerching;