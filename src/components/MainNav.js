import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  RoundButtonLink,
  StyledABorder,
  StyledLinkBorder,
} from "../styles/accents";
import { useHistory } from "react-router";

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

export default ({ logged, setLogged }) => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("blogapidr");
    if (token) {
      setLogged(true);
    }
  }, []);

  const logOut = () => {
    localStorage.setItem("blogapidr", "");
    history.replace("/");
    setLogged(false);
  };

  return (
    <StyledNav>
      {!logged ? (
        <StyledABorder
          target="_blank"
          href="https://github.com/diegoromerodev/blog-rest-api-frontend"
        >
          Frontend
        </StyledABorder>
      ) : (
        <StyledLinkBorder to="/login">Switch User</StyledLinkBorder>
      )}
      <StyledLinkBorder to="/">
        <h2>Blog API</h2>
      </StyledLinkBorder>
      {!logged ? (
        <StyledABorder
          target="_blank"
          href="https://github.com/diegoromerodev/blog-rest-api-backend"
        >
          Backend
        </StyledABorder>
      ) : (
        <StyledLinkBorder to="/create">Create Post</StyledLinkBorder>
      )}
      <RoundButtonLink
        onClick={logged ? logOut : () => {}}
        to={!logged ? "/login" : "/"}
        style={{ position: "absolute", right: "15px" }}
      >
        {logged ? "Log Out" : "Log In"}
      </RoundButtonLink>
    </StyledNav>
  );
};
