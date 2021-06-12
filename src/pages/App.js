import logo from "resources/assets/logo.svg";
import React, { Fragment } from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "../components/Nav.js";
import Home from "./Home.js";

function App() {
  return (
    <Router>
      <main>
        <Nav/>
      </main>
    </Router>
  );
}

export default App;
