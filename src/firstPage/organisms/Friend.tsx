import styled from "styled-components";
import React, {useRef, useState} from "react";

interface Item {
    id: number;
    location: string;
}

const ItemBox = styled.div``;

const Friend = () => {
    const nextID = useRef<number>(1);
    const [inputItems, setInputItems] = useState<Item[]>([{id: 0, location: ""}]);

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
        <div>
            {inputItems.map((item, index) => (
                <ItemBox key={index}>
                    <div>라벨{index}</div>
                    <input
                        type="text"
                        className={`title-${index}`}
                        onChange={(e) => handleChange(e, index)}
                        value={item.location}
                    />

                    {index === 0 && item.location.length < 4 && (
                        <button onClick={addItem}> + </button>
                    )}

                    {index > 0 && inputItems[index - 1].location ? (
                        <button onClick={() => deleteItem(item.id)}> - </button>
                    ) : (
                        ""
                    )}
                </ItemBox>
            ))}
        </div>
    );
};

export default Friend;
