import styled from "styled-components";
import OverlayHeader from "../organisms/OverlayHeader";
import {useState} from "react";
import MyLocation from "../organisms/MyLocation";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Splitter = styled.div`
  width: 100%;
  height: 1%;
  background-color: #F6F6F6;
  border-top: solid 1px #DDDDDD;
`;
const InputLayout = () => {
    const [isSearching, setIsSearching] = useState(true);
    return (
        <Container>
            <OverlayHeader/>
            <Splitter/>
            {isSearching ? <MyLocation/> : "no"}
        </Container>
    )
}

export default InputLayout;