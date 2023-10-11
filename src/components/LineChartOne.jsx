import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RightSection = styled.div`
  height: 70px;
  width: 790px;

  /* Add a CSS rule to hide the X-axis label */
  .recharts-x-axis-label {
    display: none;
  }
`;

function LineChartFlowing() {
  const [data, setData] = useState([]);
  const dataMax = 5000; // Maximum value for data points
  const dataLength = 50; // Number of data points to display
  const updateInterval = 2500; // Update interval in milliseconds (1 second)

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [];
      let prevData = data.length ? data[data.length - 1] : null;

      for (let i = 0; i < dataLength; i++) {
        const name = `Page ${i}`;
        const uv = prevData ? Math.random() * dataMax : 0;

        if (prevData) {
          prevData = { ...prevData, name, uv };
        } else {
          prevData = { name, uv };
        }

        newData.push(prevData);
      }

      setData(newData);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [data, updateInterval]);

  return (
    <RightSection>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide={true} /> {/* Hide X-axis ticks and legend */}
          <YAxis domain={[0, dataMax]} />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </RightSection>
  );
}

export default LineChartFlowing;
