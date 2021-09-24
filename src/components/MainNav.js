import styled from "styled-components";
import React from "react";
import { StyledABorder } from "../styles/accents";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
  gap: 1rem;
  h2 {
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -0.05em;
  }
`;

export default () => {
  return (
    <StyledNav>
      <StyledABorder
        target="_blank"
        href="https://github.com/diegoromerodev/blog-rest-api-frontend"
      >
        Frontend
      </StyledABorder>
      <h2>Blog API</h2>
      <StyledABorder
        target="_blank"
        href="https://github.com/diegoromerodev/blog-rest-api-backend"
      >
        Backend
      </StyledABorder>
    </StyledNav>
  );
};
