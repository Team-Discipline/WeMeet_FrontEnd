import styled, {keyframes} from "styled-components";
import ic_arrow from '../img/ic_arrow_left.svg';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {setIsAnimating, setSearchModalState} from "../variable/searchModalSlice";


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
interface OverlayHeaderBackArrowProps {
  onClose: () => void;
}
const OverlayHeaderBackArrow: React.FC<OverlayHeaderBackArrowProps> = ({ onClose }) => {
  const dispatch = useDispatch();

    return (
        <ArrowBox onClick={onClose}>
            <Img src={ic_arrow} alt=""/>
        </ArrowBox>
    )
}

export default OverlayHeaderBackArrow;