import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { StyledForm } from "../styles/accents";

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

export default ({ comment, logged }) => {
  const [hide, setHide] = useState(false);
  const { postId } = useParams();
  const handleDelete = (e) => {
    e.preventDefault();
    const url =
      "http://localhost:3000/api/posts/" + postId + "/comments/" + comment._id;
    fetch(url, {
      method: "delete",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("blogapidr"),
      }),
    })
      .then((res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => {
        if (data.length < 1) return;
        console.log(data);
        setHide(true);
      });
  };
  return (
    <>
      {hide || (
        <EditForm>
          <CommentContainer className="commentItem">
            {logged && <input type="text" disabled value={comment._id} />}
            {!logged ? (
              <h5>{comment.author}</h5>
            ) : (
              <input type="text" name="author" defaultValue={comment.author} />
            )}
            {!logged ? (
              <p>{comment.text}</p>
            ) : (
              <input type="text" name="text" defaultValue={comment.text} />
            )}
            {logged && <button type="submit">SAVE COMMENT</button>}
            {logged && (
              <button
                onClick={handleDelete}
                style={{ backgroundColor: "#f7a5a5" }}
              >
                DELETE COMMENT
              </button>
            )}
          </CommentContainer>
        </EditForm>
      )}
    </>
  );
};
