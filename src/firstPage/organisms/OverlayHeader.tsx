import styled from "styled-components";
import OverlayHeaderBackArrow from "../atoms/OverlayHeaderBackArrow";
import OverlaySearch from "./OverlaySearch";
import OverlayHeaderSerching from "../atoms/OverlayHeaderSerching";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
`;

const OverlayHeader = () => {
    return (
        <Container>
            <OverlayHeaderBackArrow/>
            <OverlaySearch/>
            <OverlayHeaderSerching/>
        </Container>
    )
}

export default OverlayHeader;