import React from "react";
import styled from "styled-components";
import {
  Link,
} from "react-router-dom";
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  @media only screen and (max-width: 768px) {
   display: none;
  }
`;


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #853a21;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <h2>NeoSynaptics </h2>
          <Logo src="./img/logo.png" />
        </Links>
        <Icons>
          <Link to="login">
          <Button>Login</Button>
          </Link>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
