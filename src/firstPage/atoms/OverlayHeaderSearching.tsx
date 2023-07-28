import styled from "styled-components";

interface Props {
    searchLocation: () => void;
}

const Searching = styled.div`
  width: 5%;
  height: 80%;
  font-size: 100%;
  color: #4683FF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayHeaderSearching = ({searchLocation}: Props) => {
    return (
        <Searching onClick={searchLocation}>
            검색
        </Searching>
    )
}

export default OverlayHeaderSearching;