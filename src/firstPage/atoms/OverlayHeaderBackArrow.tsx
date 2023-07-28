import styled from "styled-components";
import ic_arrow from '../img/ic_arrow_left.svg';
import React from "react";

const ArrowBox = styled.div`
  width: 5%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
`;

const OverlayHeaderBackArrow = () => {
    const backPage = () => {
        console.log("it is working");
    }
    return (
        <ArrowBox onClick={backPage}>
            <Img src={ic_arrow} alt=""/>
        </ArrowBox>
    )
}

export default OverlayHeaderBackArrow;