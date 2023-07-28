import React from "react";
import styled from 'styled-components';
import RandomLocation from "./RandomLocation";
import Title from "./Title";
import WhiteBoxButton from "./WhiteBoxButton";
import StartLocate from "./StartLocate";
import PlusFriend from "./PlusFriend";
import ListLocate from "./StartLocate";

const Container = styled.div`
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  position: absolute;
  //display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const WhiteBox = styled.div`
  margin-left: 16px;
  border-radius: 10px;
  width: calc(100% - 32px);
  max-height: 496px;
  mix-blend-mode: normal;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  padding-top: 16px;
  padding-bottom: 32px;
  background: #fff;
`;
const FriendContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: block;
  max-height: 188px;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;
const Div = styled.div`
  margin-bottom: 4px;
  display: flex;
  box-sizing: border-box;
  padding: 10px 16px;
  align-items: center;
`;
const InputBox = () => {
    const numberOfList = 2;
    return (
        <Container>
            <WhiteBox>
                <Title/>
                <FriendContainer>
                  {Array.from({length: numberOfList}, (_, i) => (
                    <Div key={i}>
                      <StartLocate i={i+1}/>
                    </Div>
                    ))}
                </FriendContainer>
                <PlusFriend />
                <WhiteBoxButton/>
            </WhiteBox>
            <RandomLocation/>
        </Container>
    )
}

export default InputBox;