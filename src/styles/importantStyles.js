import styled from "styled-components";
import { StyledForm } from "./accents";

const StyledArticle = styled.article`
  border: 1px solid #333;
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Noto Serif", serif;
    font-size: 4em;
    margin: 2rem;
  }
  h4 {
    flex-grow: 0;
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #333;
    color: #fafafa;
    font-weight: lighter;
    font-size: 0.9em;
    margin-bottom: 2rem;
  }
  img {
    max-height: 50vh;
    filter: saturate(0);
    box-shadow: 5px 5px 0 #333;
    margin-bottom: 2rem;
  }
  .content {
    margin-bottom: 2rem;
    padding: 0 5rem;
    line-height: 2em;
    a {
      text-decoration: underline;
    }
  }
`;

const CommentContainer = styled.div`
  padding: 1em 5em;
  &.commentItem:nth-child(2) {
    border-top: 1px solid #333;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #333;
  }
`;

const EditForm = styled(StyledForm)`
  border-top: 1px solid #333;
  button,
  input {
    border: 1px solid #333;
    border-left: none;
  }
  input:first-child {
    border-left: 1px solid #333;
  }
`;

export { StyledArticle, EditForm, CommentContainer };
