import styled from "styled-components";

const PlusFriend = () => {
      return (
        <Div>
          <Img src="img/ic_user_add.svg" alt="" />
          <Span>친구 추가하기</Span>
        </Div>
    )
}
const Div = styled.div`
  height: 44px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000;
`;
const Img = styled.img`
  height: 24px;
  width: 24px;
  display: block;
  margin-right: 6px;
`;
const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
export default PlusFriend;
