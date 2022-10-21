import React from "react";
import Nav from "./Nav";
import Showcase from "./Showcase";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Showcase />} />
      </Routes>
      <Skills />
    </Router>
  );
};

export default App;
