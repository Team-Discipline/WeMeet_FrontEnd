import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import fastAPI from "../../lib/api";
import Question from "../interface";


const Container = styled.div``;

const Detail = () => {
    const {question_id} = useParams();
    const [question, setQuestion] = useState<Question | null>();

    function get_question() {
        fastAPI("get", "/question/detail/" + question_id, {}, (json) => {
            setQuestion(json)
        })
    }

    useEffect(() => {
        get_question();
    }, []);
    
    return (
        <Container>
            <h1>{question ? question.subject : ""}</h1>
            <div>{question ? question.content : ""}</div>
        </Container>
    );
};

export default Detail;
