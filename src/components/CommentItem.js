import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  padding: 1em 5em;
  &.commentItem:nth-child(2) {
    border-top: 1px solid #333;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #333;
  }
`;

export default ({ comment }) => {
  return (
    <CommentContainer className="commentItem">
      <h5>{comment.author}</h5>
      <p>{comment.text}</p>
    </CommentContainer>
  );
};
