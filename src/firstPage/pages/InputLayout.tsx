import styled, {css, keyframes} from "styled-components";
import OverlayHeader from "../organisms/OverlayHeader";
import React, {useEffect, useState} from "react";
import MyLocation from "../organisms/MyLocation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {setIsAnimating, setSearchModalState} from "../variable/searchModalSlice";
interface Props {
    onClose: () => boolean;
}
const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
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
const Container = styled.div<{isSearching: boolean; isAnimating: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isSearching, isAnimating }) =>
          isSearching || isAnimating ? "0" : "100%"};  
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ isAnimating }) =>
          isAnimating 
          ? css`
            ${slideInAnimation} 0.3s forwards
            `
          : css`
              ${slideOutAnimation} 0.3s forwards
            `};
`;

const Splitter = styled.div`
  width: 100%;
  height: 1%;
  background-color: #f6f6f6;
  border-top: solid 1px #dddddd;
`;
interface Item {
    id: number;
    location: string;
}
interface InputLayoutProps {
  isAnimating: boolean;
    selectedItem: Item | null;
    onClose: () => void;
}
const InputLayout: React.FC<InputLayoutProps> = ({isAnimating, onClose}) => {
  const isSearching = useSelector((state: RootState) => state.SearchModal.showSearchModal);
  const dispatch = useDispatch();
    return (
      <FullScreenWrapper>
        <Container isSearching = {isSearching} isAnimating={isAnimating} >
            <OverlayHeader onClose={onClose}/>
            <Splitter/>
            {isSearching ? <MyLocation/> : "no"}
        </Container>
      </FullScreenWrapper>
    )
}

export default InputLayout;