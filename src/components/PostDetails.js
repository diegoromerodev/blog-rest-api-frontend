import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Comments from "./Comments";
import parse from "html-react-parser";
import { StyledLinkBorder } from "../styles/accents";
import { StyledArticle } from "../styles/importantStyles";

export default ({ logged }) => {
  const { postId } = useParams();
  const [postData, setPostData] = useState([]);
  const [html, setHtml] = useState("");
  const [readable, setReadable] = useState(false);
  const history = useHistory();
  useEffect(() => {
    fetch("https://blogapidr.herokuapp.com/api/posts/" + postId)
      .then((res) => {
        if (res.status !== 200) return [];
        return res.json();
      })
      .then((data) => {
        setPostData(data);
        setHtml(data.text);
        setReadable(data.readable);
      });
  }, []);

  const changeVisibility = () => {
    const body = JSON.stringify({
      thumbnail: postData.thumbnail,
      title: postData.title,
      text: postData.text,
      readable: (!readable).toString(),
    });
    const url = "https://blogapidr.herokuapp.com/api/posts/" + postData._id;
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
        setReadable(!readable);
      });
  };

  const handleDelete = () => {
    const url = "https://blogapidr.herokuapp.com/api/posts/" + postData._id;
    fetch(url, {
      method: "delete",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("blogapidr"),
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => {
        if (data.length < 1) return;
        history.replace("/");
      });
  };

  return (
    <>
      <StyledArticle>
        {logged && (
          <>
            <StyledLinkBorder
              style={{ marginTop: "2rem" }}
              onClick={changeVisibility}
            >
              {readable ? "MAKE POST PRIVATE" : "MAKE POST PUBLIC"}
            </StyledLinkBorder>
            <StyledLinkBorder to={"/posts/" + postData._id + "/edit"}>
              EDIT POST
            </StyledLinkBorder>
            <StyledLinkBorder
              to="#"
              onClick={handleDelete}
              style={{ color: "red" }}
            >
              DELETE POST
            </StyledLinkBorder>
          </>
        )}
        <h1>{postData?.title}</h1>
        <h4>
          {postData?.author?.full_name} / Created on {postData?.formatted_date}
        </h4>
        <img src={postData?.thumbnail} />
        {/* THIS NEED TO DOUBLE PARSE IS CAUSED BY A TINYMCE OUTPUT BUG */}
        <div className="content">{parse(parse(html).toString())}</div>
      </StyledArticle>
      <Comments logged={logged} />
    </>
  );
};
