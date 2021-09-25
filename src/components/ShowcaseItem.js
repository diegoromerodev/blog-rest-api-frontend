import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BigShowItem = styled(Link)`
  border: 1px solid #333;
  border-top: none;
  border-left: none;
  display: grid;
  grid-template-rows: 8fr 2fr;
  padding: 1em;
  &:nth-child(3n + 2) {
    border-left: 1px solid #333;
  }
  .img-container {
    overflow: hidden;
    img {
      transition: all 0.4s ease;
      filter: saturate(0);
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .date {
    color: #999;
    padding: 5px;
  }
  h2 {
    font-family: "Noto Serif", serif;
    font-size: 2em;
  }
  p {
    margin-top: 1em;
    font-size: 0.7em;
    flex-grow: 0;
    color: #fafafa;
    padding: 0.3em 0.8em;
    display: inline;
    background-color: #333;
    opacity: 0.7;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &.blockShowItem {
    border-left: ${(props) =>
      props.position % 3 === 1 || !props.position ? "1px solid #333" : "none"};
    grid-column: ${(props) => (!props.position ? 1 : props.position % 3)} / -1;
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 3fr;
  }
  &:hover img {
    filter: saturate(1);
  }
  &[data-private="false"] {
    opacity: 0.5;
  }
`;

export default ({ post, position, length }) => {
  const [numberOfComments, setNumberOfComments] = useState([]);
  useEffect(() => {
    fetch(
      "https://blogapidr.herokuapp.com/api/posts/" + post._id + "/comments/"
    )
      .then((res) => {
        return res.json() || [];
      })
      .then((data) => setNumberOfComments(data.reduce((acc) => acc + 1, 0)));
  }, []);
  return (
    <BigShowItem
      to={"/posts/" + post._id}
      className={
        position === 0 || (position === length - 1 && (length - 1) % 3)
          ? "blockShowItem"
          : ""
      }
      position={position}
      data-private={post.readable.toString()}
    >
      <div className="img-container">
        <img src={post.thumbnail} alt={post.title + " thumbnail"} />
      </div>
      <div className="info-container">
        <small className="date">
          {post.author.full_name} / Created on {post.formatted_date}
        </small>
        <h2>{post.title}</h2>
        <p>
          <i className="fa-solid fa-comments"></i>&nbsp;
          {numberOfComments} comment{numberOfComments !== 1 ? "s" : ""}
        </p>
      </div>
    </BigShowItem>
  );
};
