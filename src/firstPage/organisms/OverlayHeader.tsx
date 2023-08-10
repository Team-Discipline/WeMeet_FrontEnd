import styled from "styled-components";
import OverlayHeaderBackArrow from "../atoms/OverlayHeaderBackArrow";
import OverlaySearch from "./OverlaySearch";
import OverlayHeaderSearching from "../atoms/OverlayHeaderSearching";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
`;
interface OverlayHeaderProps {
  onClose: () => void;
}

const OverlayHeader: React.FC<OverlayHeaderProps> = ({ onClose }) => {
    const searchLocation = () => {
    }
    return (
        <Container>
            <OverlayHeaderBackArrow  onClose={onClose}/>
            <OverlaySearch searchLocation={searchLocation}/>
            <OverlayHeaderSearching searchLocation={searchLocation}/>
        </Container>
    )
}

export default OverlayHeader;