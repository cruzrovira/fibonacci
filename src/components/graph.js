import React from "react";
import styled from "styled-components";
import { Chart } from "react-charts";
import { fibonacci } from "./helperMath";
const GraphStyled = styled.div`
  width: 100%;
  height: 400px;
`;

const Graph = ({ nIterations }) => {
  let datafibonacci = fibonacci(nIterations);

  const data = [
    {
      label: "Series Fibonacci",
      data: datafibonacci,
    },
  ];

  const axes = [
    { primary: true, type: "linear", position: "bottom" },
    { type: "linear", position: "left" },
  ];

  return (
    <GraphStyled>
      <Chart data={data} axes={axes} />
    </GraphStyled>
  );
};

export default Graph;
