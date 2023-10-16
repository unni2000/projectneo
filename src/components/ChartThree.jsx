import React from 'react'
import styled from "styled-components";
import LineChartOne from "../components/LineChartOne";
const ChartThreeSection = styled.div`
height: 100px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const FocusChart = styled.div`
width:850px ;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
const TirednessChart = styled.div`
width:850px ;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
const Title = styled.div`
width:50px;
display: flex;
justify-content: center;;
`

function ChartThree() {
  return (
    <ChartThreeSection>
      <FocusChart>
      <Title>Focus</Title>
      <LineChartOne/>
      </FocusChart>
      <TirednessChart>
      <Title>Tiredness</Title>
      <LineChartOne/>
      </TirednessChart>
    </ChartThreeSection>
  )
}

export default ChartThree