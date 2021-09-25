import React from "react";
import { StyledForm } from "../styles/accents";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";

const PostForm = styled(StyledForm)`
  > input,
  > button,
  > select {
    border-right: 1px solid #333;
  }
  > select {
    border-top: 1px solid #333;
  }
  > button {
    border-bottom: 1px solid #333;
  }
  h3 {
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -0.05em;
    padding: 1rem;
    text-align: center;
    border: 1px solid #333;
    border-top: none;
  }
`;

export default ({ method, handleSubmit, editorRef, title, errors }) => {
  return (
    <PostForm method={method} onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <input type="text" name="thumbnail" placeholder="Post Thumnail URL" />
      <input type="text" name="title" placeholder="Post Title" />
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Post Body</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <select name="readable">
        <option disabled>Post Privacy</option>
        <option value="false">Private</option>
        <option value="true">Public</option>
      </select>
      <button
        type="submit"
        style={errors ? { backgroundColor: "#f7a5a5" } : {}}
      >
        {!errors ? "SAVE POST" : "ERRORS WHILE SAVING. TRY AGAIN LATER."}
      </button>
    </PostForm>
  );
};
