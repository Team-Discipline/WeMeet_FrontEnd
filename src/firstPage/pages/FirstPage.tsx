import Background from "../atoms/Background";
import React from "react";
import InputBox from "../organisms/InputBox";
import InputLayout from "./InputLayout";

const FirstPage = () => {
    return (
        <div>
            <Background/>
            <InputBox/>
            <InputLayout/>
        </div>
    )
}

export default FirstPage;