import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Comments from "./Comments";

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
  }
`;

export default () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/posts/" + postId)
      .then((res) => {
        if (res.status !== 200) return [];
        return res.json();
      })
      .then(setPostData);
  }, []);
  return (
    <>
      <StyledArticle>
        <h1>{postData?.title}</h1>
        <h4>
          {postData?.author?.full_name} / Created on {postData?.formatted_date}
        </h4>
        <img src={postData?.thumbnail} />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postData?.text }}
        ></div>
      </StyledArticle>
      <Comments />
    </>
  );
};
