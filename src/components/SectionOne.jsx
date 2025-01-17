import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 844px) {
    flex: 1;
    align-items: center;
    padding-bottom:-5px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color:#ffffff;

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

const Subtitle = styled.h2`
  color: #f32a2a;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 844px) {
    padding: 20px;
    padding-bottom:5px;
    text-align: center;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 844px) {
    flex: 1;
    width: 550px;
    height: 100px;
    padding-top:-10px;
    padding-right:20px
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
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const SectionOne = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Precision Engineering</Title>
          <WhatWeDo>
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
          Every thread, every stitch of NeoSynaptics encapsulates advanced technology, designed for the modern wearable tech.
          </Desc>
        </Left>
        <Right>
          <Img src="./img/ocap4.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default SectionOne;
