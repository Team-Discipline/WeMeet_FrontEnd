import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 2%;
`;

const Span = styled.span`
  color: gray;
`;

const PlusFriend = () => {
    const plusFriend = () => {

    }
    return (
        <Container>
            <Span onClick={plusFriend}>
                친구 추가하기
            </Span>
        </Container>
    )
}