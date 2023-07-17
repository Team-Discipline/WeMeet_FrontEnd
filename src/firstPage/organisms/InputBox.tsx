import React from "react";
import styled from 'styled-components';
import RandomLocation from "./RandomLocation";
import Title from "../atoms/Title";
import WhiteBoxButton from "../atoms/WhiteBoxButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const WhiteBox = styled.div`
  border-radius: 15px;
  display: flex;
  display: flex;
  justify-content: center;
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
                <WhiteBoxButton/>
            </WhiteBox>
            <RandomLocation/>
        </Container>
    )
}

export default InputBox;