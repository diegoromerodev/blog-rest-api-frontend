import React, { useState } from "react";
import { useParams } from "react-router";
import { StyledForm } from "../styles/accents";

export default ({ setComments }) => {
  const { postId } = useParams();
  const [errors, setErrors] = useState(false);
  const handlePostRequest = (e) => {
    e.preventDefault();
    const author = e.target[0].value;
    const text = e.target[1].value;
    const body = JSON.stringify({
      author,
      text,
    });

    const url = `http://localhost:3000/api/posts/${postId}/comments/`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body, // body data type must match "Content-Type" header
    })
      .then((res) => {
        setErrors(!res.ok);
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => {
        if (data.length < 1) return;
        setComments((prevState) => {
          return [...prevState, data];
        });
        e.target[0].value = e.target[1].value = "";
      });
  };

  return (
    <StyledForm onSubmit={handlePostRequest} method="post">
      <input name="author" type="text" placeholder="Enter Your Name"></input>
      <input name="text" placeholder="Tell us what's on your mind..."></input>
      <button
        type="submit"
        style={errors ? { backgroundColor: "#f7a5a5" } : {}}
      >
        {errors ? "ERRORS SUBMITTING. SEND AGAIN?" : "POST COMMENT"}
      </button>
    </StyledForm>
  );
};
