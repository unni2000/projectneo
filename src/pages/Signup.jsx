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
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 768px) {
    width: 270px;
    height: 250px;
  }
`;

const Title = styled.h2`
  padding-bottom:4px;
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
  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ac6040;
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
function Signup() {

    return (
      <LoginSection>
<CenteredContainer>
      <LoginFormContainer>
        <Title>SignUp</Title>
        <form>
          <InputField type="text" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <InputField type="password" placeholder="Confirm Password" />
        <Button type="submit">SignUp</Button>
        </form>
      </LoginFormContainer>
    </CenteredContainer>
      </LoginSection>
    )
}

export default Signup;