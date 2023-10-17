
import React, { Suspense } from "react";
import styled from "styled-components";
import StationNav from "../components/StationNav";
import BarChartOne from "../components/BarChartOne";
import LineChartOne from "../components/LineChartOne";
import LineChartLast from "../components/LineChartLast";
import ChartThree from "../components/ChartThree";


const DashboardContainer = styled.div`
  height: 100vh;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #ffffff;
  &::-webkit-scrollbar{
    display: none;
  }
`;
const Container = styled.div`
  height: 740px;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const LeftSection = styled.div`
height: 500px;
width : 750px;
`

const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 800px;
  }
`;

const Img = styled.img`
  width: 800px;
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
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const LineChartBody = styled.div`
width:850px ;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
`
const Title = styled.div`
width:30px;
display: flex;
justify-content: center;;
`
function Dashboard() {
  return (
    <DashboardContainer>
    <StationNav/>
    <Container>
        <Left>
          <LeftSection>
         <BarChartOne/>
      </LeftSection>
        </Left>
        <Right>
          <LineChartBody>
          <LineChartOne/>
          <Title>F1L</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>F2L</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>F3</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>F4</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>C1</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>C2</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>C3</Title>
          </LineChartBody>
          <LineChartBody>
          <LineChartOne/>
          <Title>C4</Title>
          </LineChartBody>
        </Right>
      </Container>
      <ChartThree/>
    </DashboardContainer>
  )
}

export default Dashboard