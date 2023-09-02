import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import fastAPI from "../../lib/api";
import {Question} from "../interface";
import ErrorComponent from "../../lib/err";

const Detail = () => {
    const {question_id} = useParams();
    const [question, setQuestion] = useState<Question | null>({
        content: "",
        create_date: "",
        id: 0,
        subject: "",
        answers: []
    });
    const [content, setContent] = useState("");
    const [error, setError] = useState({detail: []});

    const getQuestion = () => {
        fastAPI("get", `/question/detail/${question_id}`, {}, (json) => {
            setQuestion(json);
        }, undefined);
    };

    const postAnswer = (event: React.FormEvent) => {
        event.preventDefault();
        const url = `/answer/create/${question_id}`;
        const params = {
            content: content,
        };
        fastAPI("post", url, params, () => {
            setContent("");
            getQuestion();
        }, (jsonError: React.SetStateAction<{ detail: never[]; }>) => {
            setError(jsonError);
        });
    };

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <Container>
            <h1>{question ? question.subject : ""}</h1>
            <div>{question ? question.content : ""}</div>
            <ul>
                {question ? (
                    question.answers.map((answer) => (
                        <li key={answer.id}>{answer.content}</li>
                    ))
                ) : (
                    <li>Loading...</li>
                )}
            </ul>
            <ErrorComponent error={error}/>
            <form method="post">
                <Textarea
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></Textarea>
                <Button onClick={postAnswer} type="submit">
                    답변등록
                </Button>
            </form>
        </Container>
    );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  top: 5%;
  height: 100vh;
  left: 0;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Textarea = styled.textarea`
  width: 100%;
`;

const Button = styled.button`
  color: white;
  background-color: #3c9aff;
  width: 20%;
  height: 5%;
  border-radius: 10px;
  border-style: none;

  &:hover {
    color: #007bff;
  }
`;