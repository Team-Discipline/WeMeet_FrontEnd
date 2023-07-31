import styled, {css, keyframes} from "styled-components";
import OverlayHeader from "../organisms/OverlayHeader";
import {useState} from "react";
import MyLocation from "../organisms/MyLocation";
interface Props {
    onClose: () => void;
}
const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const FullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  transform: none!important;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div<{isSearching: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isSearching }) => (isSearching ? "0" : "100%")};
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ isSearching }) =>
          isSearching &&
          css`
      ${slideInAnimation} 0.3s forwards;
    `};
`;

const Splitter = styled.div`
  width: 100%;
  height: 1%;
  background-color: #f6f6f6;
  border-top: solid 1px #dddddd;
`;
const InputLayout = ({onClose}: Props) => {
    const [isSearching, setIsSearching] = useState(true);

    return (
      <FullScreenWrapper>
        <Container isSearching = {isSearching}>
            <OverlayHeader/>
            <Splitter/>
            {isSearching ? <MyLocation/> : "no"}
        </Container>
      </FullScreenWrapper>
    )
}

export default InputLayout;