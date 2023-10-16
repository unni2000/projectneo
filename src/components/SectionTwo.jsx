
import React, { Suspense } from "react";
import styled from "styled-components";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 844px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 844px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 844px) {
    flex: 1;
    width: 800px;
    height: 100px;
  }
  
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 844px) {
    text-align: center;
    font-size: 50px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 844px) {
    padding: 20px;
    text-align: center;
  }
`;

const Right = styled.div`
flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 844px) {
    flex: 1;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
 

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
function SectionTwo() {
  return (
    <Section>

      <Container>
        <Left>
          <Img src="./img/ocap2.png" />
        </Left>
        <Right>
        <Title>Next-Gen Tech</Title>
          <Desc>
          NeoSynaptics isn't just a cap. It's a leap into tomorrow, embedding cutting-edge features seamlessly into everyday wear.
          </Desc>
          
        </Right>
      </Container>
    </Section>
  )
}

export default SectionTwo