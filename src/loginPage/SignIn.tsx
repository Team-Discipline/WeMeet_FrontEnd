import React from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  top: 41px;
  position: relative;
  text-align: center;
`;

const SignInForm = styled.form`
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

const SignInButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignIn = () => {
  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <SignInForm>
        <InputLabel>
          Username:
          <InputField type="text" />
        </InputLabel>
        <InputLabel>
          Password:
          <InputField type="password" />
        </InputLabel>
        <SignInButton>Sign In</SignInButton>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
