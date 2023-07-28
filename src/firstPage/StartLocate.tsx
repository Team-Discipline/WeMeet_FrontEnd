import React from 'react';
import styled from "styled-components";
const StartLocate = ({i} :{i: number}) => {
  return (
    <Div>
      <span style={{display: 'block', fontWeight: '500', lineHeight: '24px', color: '#7975ff', marginRight: '6px', fontStyle: 'normal', fontSize: '16px'}}>{i}.</span>
      <span style={{textAlign: 'left', color: '#7975ff', fontWeight: '400', flexGrow: '1'}}>출발지를 입력해주세요</span>
    </Div>
  )
}
const Div = styled.div`
  border: 1px solid #7975ff;
  display: flex;
  box-sizing: border-box;
  background: rgba(121,117,255,0.05);
  flex: 1;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  padding-left: 8px;
`;
export default StartLocate;