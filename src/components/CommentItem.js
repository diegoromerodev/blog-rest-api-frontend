import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { CommentContainer, EditForm } from "../styles/importantStyles";

export default ({ comment, logged }) => {
  const [hide, setHide] = useState(false);
  const { postId } = useParams();
  const history = useHistory();
  const handleDelete = (e) => {
    e.preventDefault();
    const url =
      "https://blogapidr.herokuapp.com/api/posts/" +
      postId +
      "/comments/" +
      comment._id;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      author: e.target[1].value,
      text: e.target[2].value,
    });
    const url =
      "https://blogapidr.herokuapp.com/api/posts/" +
      postId +
      "/comments/" +
      e.target[0].value;
    fetch(url, {
      method: "put",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("blogapidr"),
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body,
    })
      .then((res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => {
        if (data.length < 1) return;
        history.replace("/posts/" + postId);
      });
  };

  return (
    <>
      {hide || (
        <EditForm onSubmit={handleSubmit}>
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
