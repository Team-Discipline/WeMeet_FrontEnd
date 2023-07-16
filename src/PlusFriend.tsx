import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 2%;
`;

const Span = styled.span`

`;

const PlusFriend = () => {
    const plusFriend = () => {

    }
    return (
        <Container>
            <span onClick={plusFriend}>
                친구 추가하기
            </span>
        </Container>
    )
}