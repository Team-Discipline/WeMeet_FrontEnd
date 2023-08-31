import React, {useEffect, useState} from 'react';
import fastAPI from "../../lib/api";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

interface Question {
    id: number;
    subject: string;
    // Add other properties as needed
}

const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  color: #333;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

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
        <>
            <table>
                <thead>
                <tr className="table-dark">
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일시</th>
                </tr>
                </thead>
                <tbody>
                {questionList.map((question) => (
                    <tr key={question.id}>
                        <td>
                            <NavLinkStyled to={`/noticeboard/detail/${question.id}`}>
                                {question.subject}
                            </NavLinkStyled>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={prev_page}>이전</button>
            <button onClick={next_page}>다음</button>
            <NavLinkStyled to="/question-creation">질문 등록하기</NavLinkStyled>
        </>
    );
};

export default NoticeBoard;
