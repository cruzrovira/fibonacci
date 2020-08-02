import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/form";
import Graph from "./components/graph";

const AppStyled = styled.div`
  margin: auto;

  h1 {
    text-align: center;
    color: #f1f1f1;
  }

  .col {
    background: #f1f1f1;
    padding: 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }
  h2 {
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    width: 800px;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .col {
      width: 48%;
    }
  }
`;

const App = () => {
  let [nIterations, setnIterations] = useState(null);

  const addNiterations = (nIterations) => {
    setnIterations(nIterations);
  };
  return (
    <AppStyled>
      <h1>Fibonacci</h1>
      <div className="row">
        <div className="col">
          <Form addNiterations={addNiterations} />
        </div>
        <div className="col">
          {nIterations ? (
            <Graph nIterations={nIterations.nIterations} />
          ) : (
            <h2> Graph</h2>
          )}
        </div>
      </div>
    </AppStyled>
  );
};

export default App;
