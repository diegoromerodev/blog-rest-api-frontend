import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px;
  text-align: center;
  a {
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -0.05em;
  }
`;

export default () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/diegoromerodev/"
        target="_blank"
        rel="noreferrer"
      >
        Diego Romero
      </a>
    </StyledFooter>
  );
};
