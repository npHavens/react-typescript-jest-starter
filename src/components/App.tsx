import React, { useState } from "react";
import styled from 'styled-components';
import StyledButton from './Button/Button';

const StyledApp = () => {
  const App = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div className={"App"}>
      <App>
        Hello World
        <StyledButton/>
      </App>
    </div>
  );
};
export default StyledApp;
