import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import fastAPI from "../../lib/api";
import ErrorComponent from "../../lib/err";
import styled from "styled-components";

const QuestionCreate = () => {
    const history = useNavigate(); // Import useHistory from 'react-router-dom'
    const [error, setError] = useState({detail: []});
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const postQuestion = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const url = '/question/create';
        const params = {
            subject: subject,
            content: content,
        };
        fastAPI(
            'post',
            url,
            params,
            () => {
                history('/noticeboard/');
            },
            (jsonError: React.SetStateAction<{ detail: never[]; }>) => {
                setError(jsonError);
            }
        );
    };

    return (
        <Container>
            <h5>질문 등록</h5>
            <ErrorComponent error={error}/>
            <QuestionForm method="post">
                <QuestionFormTitle
                    placeholder="제목"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <QuestionContent
                    placeholder="내용"
                    className="form-control"
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></QuestionContent>

                <Button onClick={postQuestion}>
                    저장하기
                </Button>
            </QuestionForm>
        </Container>
    );
};

export default QuestionCreate;


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

const QuestionForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionFormTitle = styled.input`
  width: 80%;
  height: 5%;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 2%;
`;

const QuestionContent = styled.textarea`
  width: 80%;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 2%;
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