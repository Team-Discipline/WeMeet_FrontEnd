import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import fastAPI from "../../lib/api";
import {Question} from "../interface";


const NoticeBoard = () => {
    const [questionList, setQuestionList] = useState<Question[]>([]);
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
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
        if (page >= 0 && page <= totalPage) {
            setPage(page + 1);
        }
    };

    const prev_page = () => {
        if (page > 0 && page < totalPage) {
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
                        <ThContent>제목</ThContent>
                        <ThContent>작성일시</ThContent>
                    </TitleTr>
                </Thead>
                <TBody>
                    {questionList.map((question) => (
                        <TBodyTr key={question.id}>
                            <TBodyTd>
                                <NavLinkStyled to={`/noticeboard/detail/${question.id}`}>
                                    <TBodyDiv>{question.id}</TBodyDiv>
                                    <TBodyDivContent>{question.subject}</TBodyDivContent>
                                    <TBodyDivContent>{question.create_date.slice(0, 10)}</TBodyDivContent>
                                </NavLinkStyled>
                            </TBodyTd>
                        </TBodyTr>
                    ))}
                </TBody>
            </Table>
            <ControlBox>
                <CreateQuestion to="/question-creation">질문 등록하기</CreateQuestion>
                <Button onClick={prev_page}>이전</Button>
                <Button onClick={next_page}>다음</Button>
            </ControlBox>
        </Container>
    );
};

export default NoticeBoard;


const Container = styled.div`
  width: 100%;
  top: 25%;
  height: 100vh;
  left: 0;
  position: fixed;
  justify-content: center;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreateQuestion = styled(NavLink)`
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