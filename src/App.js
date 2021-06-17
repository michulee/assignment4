import React, { Fragment } from "react";
import 'styles/App.scss';

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Nav from "components/Header.js";
import Home from "pages/Home.js";
import Login from "pages/Login.js";

export default function App() {
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
            {/* <Route path="*" component={NotFound} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} /> 
            {/* <Route path="/register" component={Pages} /> */}

            {/* <Route path="/public" component={public} /> */}
        </Switch>
      </main>
    </Router>
  );
}

