import React from 'react';
import styled from "styled-components";
import {
    Link,
  } from "react-router-dom";
const LoginSection = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginFormContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const InputField = styled.input`
  width: 380px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
function Login() {

    return (
      <LoginSection>
<CenteredContainer>
      <LoginFormContainer>
        <Title>Login</Title>
        <form>
          <InputField type="text" placeholder="Username" />
          <InputField type="password" placeholder="Password" />
          <Link to="/dashboard">
            <Button type="submit">Login</Button>
            </Link>
        </form>
      </LoginFormContainer>
    </CenteredContainer>
      </LoginSection>
    )
}

export default Login;