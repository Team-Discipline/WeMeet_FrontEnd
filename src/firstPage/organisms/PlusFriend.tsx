import styled from "styled-components";

interface Props {
    addItem: any;
}

const Container = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 2%;
`;

const Span = styled.span`
  color: gray;
  cursor: pointer;
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
