import React from "react";
import styled from 'styled-components';
// @ts-ignore
import Backgorund from '../img/background.png';


const ImgBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`;

const BackImg = () => {
    return (
        <ImgBox>
            <Img src={Backgorund} alt=""/>
        </ImgBox>
    )
}

export default BackImg;