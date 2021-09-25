import React from "react";
import { StyledForm } from "../styles/accents";
import styled from "styled-components";
import { useHistory } from "react-router";

const LoginContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 40vh;
  width: 500px;
  max-width: 500px;
  input,
  button {
    border-right: 1px solid #333;
  }
  button {
    border-bottom: 1px solid #333;
  }
  h3 {
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -0.05em;
    padding: 1rem;
    text-align: center;
    border: 1px solid #333;
  }
`;

export default ({ setLogged, logged }) => {
  const history = useHistory();
  const handlePostRequest = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const body = JSON.stringify({
      email,
      password,
    });

    const url = `https://blogapidr.herokuapp.com/api/users/login/`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      body, // body data type must match "Content-Type" header
    })
      .then((response) => {
        if (!response.ok) return false;
        return response.json();
      })
      .then((data) => {
        if (!data) return;
        history.push("/");
        localStorage.setItem("blogapidr", data);
        setLogged(true);
      });
  };
  return (
    <LoginContainer>
      <StyledForm onSubmit={handlePostRequest} method="post">
        <h3>Member Login</h3>
        <input type="email" name="email" placeholder="Enter Your Email"></input>
        <input
          type="password"
          name="password"
          placeholder="Type Your Password"
        ></input>
        <button type="submit">LOGIN</button>
      </StyledForm>
    </LoginContainer>
  );
};
