import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import fastAPI from "../../lib/api";
import ErrorComponent from "../../lib/err";

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
        <div>
            <h5>질문 등록</h5>
            <form method="post">
                <div>
                    <label htmlFor="subject">제목</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <textarea
                        className="form-control"
                        rows={10}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button onClick={postQuestion}>
                    저장하기
                </button>
            </form>
            <ErrorComponent error={error}/>
        </div>
    );
};

export default QuestionCreate;
