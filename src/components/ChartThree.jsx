import React from 'react'
import styled from "styled-components";
import LineChartOne from "../components/LineChartOne";
const ChartThreeSection = styled.div`
height: 10px;
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
padding-left: 1.7%;
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
function ChartThree() {
  return (
    <ChartThreeSection>
      <FocusChart>
      <h4>Focus</h4>
      <LineChartOne/>
      </FocusChart>
      <TirednessChart>
      <h4>Tiredness</h4>
      <LineChartOne/>
      </TirednessChart>
    </ChartThreeSection>
  )
}

export default ChartThree