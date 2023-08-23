import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import RandomLocation from "./RandomLocation";
import Title from "../atoms/Title";
import WhiteBoxButton from "../atoms/WhiteBoxButton";
import StartLocate from "../StartLocate";
import PlusFriend from "../PlusFriend";
import Friends from "./Friends";
import InputLayout from "../pages/InputLayout";
import {RootState} from "../../app/store";
import {setIsAnimating, setSearchModalState} from "../variable/searchModalSlice";

interface Item {
    id: number;
    location: string;
}
const Container = styled.div`
  width: 100%;
  top: 25%;
  height: 100vh;
  left: 0;
  position: fixed;
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
    const numberOfList = useRef<number>(2)
    const [inputItems, setInputItems] = useState<Item[]>([{id: 0, location: ""}, {id: 1, location: ""}]);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const isSearching = useSelector((state: RootState) => state.SearchModal.showSearchModal);
    const dispatch = useDispatch();
    // 추가
    const addItem = () => {
        const input = {
            id: numberOfList.current,
            location: "",
        };
        setInputItems([...inputItems, input]);
        numberOfList.current += 1;
    }
    // 삭제
    const deleteItem = (index: number) => {
        setInputItems(inputItems.filter((i) => i.id !== index));
    }
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (index >= inputItems.length) return;
        const { value } = e.target;
        const newItems = [...inputItems];
        newItems[index].location = value;
        setInputItems(newItems);
    }
    const handleSearchModal = (item: Item, fromDeleteButton: boolean) => {
      setShowSearchModal(true);
      dispatch(setSearchModalState(true));
      setIsAnimating(!fromDeleteButton);
      setSelectedItem(item);
    }
    const handleBackPage = () => {
      setIsAnimating(false); // 애니메이션 완료
      setTimeout(() => {
        dispatch(setSearchModalState(false)); // 모달 닫기
        setShowSearchModal(false); // 모달 닫기
      }, 300);
    }
    return (
        <Container>
            <WhiteBox>
                <Title/>
                <FriendContainer>
                  {inputItems.map((item, index) => (
                    <Div key={item.id}>
                      <StartLocate onClick={() => handleSearchModal(item, false)} item={item} i={index+1} location={item.location} deleteItem={()=>deleteItem(item.id)}/>
                    </Div>
                  ))}
                </FriendContainer>
                <PlusFriend addItem={addItem}/>
                <WhiteBoxButton/>
            </WhiteBox>
            <RandomLocation/>
          {showSearchModal && (
            <InputLayout
              isAnimating={isAnimating}
              selectedItem={selectedItem}
              onClose={handleBackPage}
            />
          )}
        </Container>
    )
}

export default InputBox;