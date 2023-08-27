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

    const getQuestionList = (): void => {
        fastAPI('get', '/question/list', {}, (json) => {
            setQuestionList(json)
        })
    }

    useEffect(() => {
        getQuestionList();
    }, []);

    return (
        <ul>
            {questionList.map((question) => (
                <li key={question.id}>
                    <NavLinkStyled to={`/noticeboard/detail/${question.id}`}>{question.subject}</NavLinkStyled>
                </li>
            ))}
        </ul>
    );
};

export default NoticeBoard;


// function setQuestionList(json: any) {
//     throw new Error('Function not implemented.');
// }

