import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  top: 41px;
  position: relative;
  text-align: center;
`;

const SignUpForm = styled.form`
  display: inline-block;
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputLabel = styled.label`
  display: grid;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignUp = () => {
  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <SignUpForm>
        <InputLabel>
          Username:
          <InputField type="text" />
        </InputLabel>
        <InputLabel>
          Email:
          <InputField type="email" />
        </InputLabel>
        <InputLabel>
          Password:
          <InputField type="password" />
        </InputLabel>
        <InputLabel>
          Confirm Password:
          <InputField type="password" />
        </InputLabel>
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
