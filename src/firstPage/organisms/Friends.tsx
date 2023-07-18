import styled from "styled-components";
import React, {useRef, useState} from "react";
import PlusFriend from "./PlusFriend";
import Friend from "../atoms/Friend";

interface Item {
    id: number;
    location: string;
}

const DivContainer = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FriendsContainer = styled.div`
  overflow: scroll;
  width: 100%;
  height: 40vh;
  max-height: 70%;

`;

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

const Friends = () => {
    const nextID = useRef<number>(2);
    const [inputItems, setInputItems] = useState<Item[]>([{id: 0, location: ""}, {id: 1, location: ""}]);

    // 추가
    const addItem = () => {
        const input = {
            id: nextID.current,
            location: "",
        };

        setInputItems([...inputItems, input]);
        nextID.current += 1;
    };

    // 삭제
    const deleteItem = (index: number) => {
        setInputItems(inputItems.filter((i) => i.id !== index));
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (index >= inputItems.length) return;

        const inputItemsCopy: Item[] = JSON.parse(JSON.stringify(inputItems));
        inputItemsCopy[index].location = e.target.value;
        setInputItems(inputItemsCopy);
    };

    return (
        <DivContainer>
            <FriendsContainer>
                {inputItems.map((item, index) => (
                    <ItemBox key={index}>
                        <Friend item={item} index={index} location={item.location} deleteItem={deleteItem}/>
                    </ItemBox>
                ))}
            </FriendsContainer>
            <PlusFriend addItem={addItem}/>
        </DivContainer>
    );
};

export default Friends;
