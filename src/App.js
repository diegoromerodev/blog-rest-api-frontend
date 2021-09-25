import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import MainNav from "./components/MainNav";
import PostDetails from "./components/PostDetails";
import PostEdit from "./components/PostEdit";
import ShowcaseGrid from "./components/ShowcaseGrid";
import { Container } from "./styles/accents";
import GlobalStyles from "./styles/GlobalStyles";

export default () => {
  const [logged, setLogged] = useState(false);
  return (
    <Router>
      <GlobalStyles />
      <MainNav logged={logged} setLogged={setLogged}></MainNav>
      <Container>
        <Switch>
          <Route exact path="/">
            <ShowcaseGrid logged={logged} />
          </Route>
          <Route path="/posts/:postId/edit">
            <PostEdit logged={logged} />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails logged={logged} />
          </Route>
          <Route path="/login">
            <LoginPage logged={logged} setLogged={setLogged} />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </Router>
  );
};
