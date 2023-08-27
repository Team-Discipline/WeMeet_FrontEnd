import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Container = styled.div``;

const Detail = () => {
    const {question_id} = useParams();
    console.log("question_id: " + question_id);

    return (
        <Container>
            <h1>제목</h1>
            <div>내용</div>
        </Container>
    );
};

export default Detail;
