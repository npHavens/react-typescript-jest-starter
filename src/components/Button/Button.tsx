
import React, { useState, SFC } from "react";
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { ButtonProps } from '../../declarations/Button';

const StyledButton: SFC<ButtonProps> = () => {
  const [active, setActive] = useState(false);

  const Button = styledComponentsTS<ButtonProps>(styled.button)`
    background: ${active ? 'red' : 'black'};
    color: #fff;
    border: 0;
    padding: 7px 10px;`;

  return (
    <div className="Button">
      <Button onClick={() => setActive(!active)}>Submit</Button>
    </div>
  );

};

export default StyledButton;