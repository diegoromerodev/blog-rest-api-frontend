import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import PostForm from "./PostForm";

export default () => {
  const editorRef = useRef(null);
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      thumbnail: e.target[0].value,
      title: e.target[1].value,
      text: e.target[2].value,
      readable: e.target[17].value,
    });
    const url = "http://localhost:3000/api/posts/";
    fetch(url, {
      method: "post",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("blogapidr"),
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body,
    })
      .then((res) => {
        setErrors(!res.ok);
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => {
        if (data.length < 1) return;
        history.replace("/");
      });
  };

  return (
    <PostForm
      method="post"
      editorRef={editorRef}
      handleSubmit={handleSubmit}
      errors={errors}
      title="Create New Post"
    />
  );
};
