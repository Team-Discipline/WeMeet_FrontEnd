import React from "react";
import styled from 'styled-components';
import RandomLocation from "./RandomLocation";
import Title from "../atoms/Title";
import WhiteBoxButton from "../atoms/WhiteBoxButton";
import Friends from "./Friends";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;
`;

const WhiteBox = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 95vw;
  height: 60vh;
  background-color: white;
`;
const InputBox = () => {
    return (
        <Container>
            <WhiteBox>
                <Title/>
                <Friends/>
                <WhiteBoxButton/>
            </WhiteBox>
            <RandomLocation/>
        </Container>
    )
}

export default InputBox;