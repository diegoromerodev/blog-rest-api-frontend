import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import PostForm from "./PostForm";

export default () => {
  const editorRef = useRef(null);
  const [errors, setErrors] = useState(false);
  const [postData, setPostData] = useState(null);
  const history = useHistory();
  const { postId } = useParams();
  useEffect(() => {
    fetch("https://blogapidr.herokuapp.com/api/posts/" + postId)
      .then((res) => {
        if (res.status !== 200) return [];
        return res.json();
      })
      .then((data) => {
        setPostData(data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      thumbnail: e.target[0].value,
      title: e.target[1].value,
      text: e.target[2].value,
      readable: e.target[17].value,
    });
    const url = "https://blogapidr.herokuapp.com/api/posts/" + postId;
    fetch(url, {
      method: "put",
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
        history.replace("/posts/" + postId);
      });
  };

  return (
    <PostForm
      method="post"
      editorRef={editorRef}
      handleSubmit={handleSubmit}
      errors={errors}
      title="Edit A Post"
      post={postData}
    />
  );
};
