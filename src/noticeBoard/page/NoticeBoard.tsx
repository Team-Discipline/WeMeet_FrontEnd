import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import fastAPI from "../../lib/api";
import {Question} from "../interface";


const NoticeBoard = () => {
    const [questionList, setQuestionList] = useState<Question[]>([]);
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [totalPage, setTotalPage] = useState(1)
    const size = 10;

    const get_question_list = (_page: React.SetStateAction<number>) => {
        let params = {
            page: _page,
            size: size,
        }
        fastAPI('get', '/question/list', params, (json) => {
            setQuestionList(json.question_list)
            setTotal(json.total)
            setTotalPage(Math.ceil(total / size))
        }, undefined);
    }

    const next_page = () => {
        // page < totalPage로 하면 초반에 왜 인지 totalPage가 0으로 고정되어 있어서 값이 변하지 않음
        // 오류 이유를 찾을 시 바로 고칠 예정
        if (page <= totalPage && page != totalPage - 1) {
            setPage(page + 1);
        }
    };

    const prev_page = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        get_question_list(page);
    }, [page]);

    return (
        <Container>
            <Table>
                <Thead>
                    <TitleTr>
                        <Th>번호</Th>
                        <Th>제목</Th>
                        <Th>작성일</Th>
                    </TitleTr>
                </Thead>
                <TBody>
                    {questionList.map((question) => (
                        <TBodyTr key={question.id}>
                            <TBodyTd>
                                <NavLinkStyled to={`/noticeboard/detail/${question.id}`}>
                                    <TBodyDiv>{question.id}</TBodyDiv>
                                    <TBodyDiv>{question.subject}</TBodyDiv>
                                    <TBodyDiv>{question.create_date.slice(0, 10)}</TBodyDiv>
                                </NavLinkStyled>
                            </TBodyTd>
                        </TBodyTr>
                    ))}
                </TBody>
            </Table>
            <ControlBox>
                <Button onClick={prev_page}>이전</Button>
                <CreateQuestion to="/question-creation">질문 등록하기</CreateQuestion>
                <Button onClick={next_page}>다음</Button>
            </ControlBox>
        </Container>
    );
};

export default NoticeBoard;


const Container = styled.div`
  width: 100%;
  top: 15%;
  height: 100vh;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: #333;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: #007bff;
  }
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 100%;

`;

const Thead = styled.thead`
  width: 100%;
  height: 15%;
`;

const TitleTr = styled.tr`
  width: 100%;
  height: 100%;
  background-color: black;
  color: whitesmoke;
  display: flex;
  align-items: center;
`;

const Th = styled.th`
  flex-grow: 1;
  flex-basis: 0;
  text-align: left;
  margin-left: 2%;
`;

const ThContent = styled(Th)`
  flex-grow: 3;
`;

const TBody = styled.tbody`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TBodyTr = styled.tr`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TBodyTd = styled.td`
  width: 100%;
  height: 100%;
`;

const TBodyDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  text-align: left;
  margin-left: 2%;
`;

const TBodyDivContent = styled(TBodyDiv)`
  flex-grow: 3;
`;

const ControlBox = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CreateQuestion = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 100%;
  background-color: #3c9aff;
  width: 20%;
  height: 100%;
  border-radius: 15px;
  border-style: none;
`;

const Button = styled.button`
  color: white;
  font-size: 100%;
  background-color: #3c9aff;
  width: 20%;
  height: 100%;
  border-radius: 15px;
  border-style: none;

  &:hover {
    color: #007bff;
  }
`;