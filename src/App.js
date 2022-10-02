import React from "react";
import Nav from "./Nav";
import Showcase from "./Showcase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
const App = () => {
  return (
    <Router>
      <Nav />
      <Showcase />
    </Router>
  );
};

export default App;
