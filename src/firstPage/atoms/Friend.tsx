import styled from "styled-components";

interface Item {
    id: number;
    location: string;
}

interface props {
    index: number;
    location: string;
    deleteItem: (index: number) => void;
    item: Item;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  height: 60%;
  width: 96%;
  font-size: 20px;
  border-radius: 5px;
  border: solid 1px black;
  margin: 0px 0 2% 2%;
`;

const Number = styled.span`
  width: 10%;
`;
const Location = styled.span`
  width: 80%;
`;
const Button = styled.button`
`;

const Friend = ({item, index, location, deleteItem}: props) => {
    return (
        <Container>
            <Number>{index + 1}</Number>
            <Location>{location}</Location>
            {location ? <Button onClick={() => deleteItem(item.id)}> -</Button> : ""}
        </Container>
    )
}
export default Friend;