import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import MainNav from "./components/MainNav";
import GlobalStyles from "./styles/GlobalStyles";

export default () => {
  return (
    <Router>
      <GlobalStyles />
      <MainNav></MainNav>
    </Router>
  );
};
