import styled from "styled-components";
import OverlayHeader from "../organisms/OverlayHeader";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
`;

const InputLayout = () => {
    return (
        <Container>
            <OverlayHeader/>
        </Container>
    )
}

export default InputLayout;