import styled from "styled-components";

interface Props {
    addItem: any;
}

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: gray;
  cursor: pointer;
  font-size: 18px;
  position: relative;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusFriend = ({addItem}: Props) => {
    const plusFriend = () => {
        addItem();
    };

    return (
        <Container>
            <Span onClick={plusFriend}>친구 추가하기</Span>
        </Container>
    );
};

export default PlusFriend;
