import React, { useEffect, useState } from "react";
import ShowcaseItem from "./ShowcaseItem";
import styled from "styled-components";

const ShowcaseGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => {
      switch (props.posts.length) {
        case 2:
          return 1;
        case 3:
          return 2;
        default:
          return 3;
      }
    }},
    1fr
  );
  grid-template-rows: 50vh;
  grid-auto-rows: 50vh;
`;

export default () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://blogapidr.herokuapp.com/api/posts/")
      .then((res) => {
        if (res.status !== 200) return [];
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <ShowcaseGrid posts={posts}>
      {posts
        .filter((post) => post.readable || !!localStorage.getItem("blogapidr"))
        .map((post, index) => {
          return (
            <ShowcaseItem
              length={posts.length}
              key={post._id}
              position={index}
              post={post}
            />
          );
        })}
    </ShowcaseGrid>
  );
};
