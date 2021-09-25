import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLinkBorder = styled(Link)`
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.4s ease-out;
  &:hover {
    border-bottom: 1px solid #333;
  }
`;

const StyledABorder = styled.a`
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.4s ease-out;
  &:hover {
    border-bottom: 1px solid #333;
  }
`;

const RoundButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.2em 0.8em;
  border: 1px solid #999;
  color: #999;
  transition: all 0.4s ease-out;
  border-radius: 5em;
  font-size: 0.9em;
  &:hover {
    color: #333;
    border: 1px solid #333;
  }
`;

const Container = styled.main`
  padding: 0 50px;
  min-height: 85vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea,
  button {
    padding: 5px;
    border: 1px solid #333;
    border-top: none;
    border-right: none;
    background: transparent;
    flex-grow: 1;
    &,
    ::placeholder,
    * {
      color: #333;
      font-family: "Poppins", sans-serif;
    }
    ::placeholder {
      color: #999;
    }
  }
  button {
    cursor: pointer;
    background-color: #fafafa;
    border-bottom: none;
  }
`;

export {
  StyledLinkBorder,
  StyledABorder,
  RoundButtonLink,
  Container,
  StyledForm,
};
