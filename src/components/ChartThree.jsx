import React from 'react'
import styled from "styled-components";
import LineChartOne from "../components/LineChartOne";
const ChartThreeSection = styled.div`
height: 400px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function ChartThree() {
  return (
    <ChartThreeSection>
     <LineChartOne/>
     <LineChartOne/>
    </ChartThreeSection>
  )
}

export default ChartThree