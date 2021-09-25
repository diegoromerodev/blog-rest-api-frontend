import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  h3 {
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -0.05em;
    padding: 1rem 5rem;
  }
`;

const CommentContainer = styled.div`
  border: 1px solid #333;
  border-top: none;
`;

export default () => {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/api/posts/" + postId + "/comments/")
      .then((res) => {
        if (res.status !== 200) return [];
        return res.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, []);
  return (
    <CommentContainer>
      <GridWrapper>
        <h3>Voice Your Opinions</h3>
        <CommentForm setComments={setComments} />
      </GridWrapper>
      {comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </CommentContainer>
  );
};
