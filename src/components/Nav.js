import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import "./Nav.scss";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
// import Login from "../pages/Login.js";
import Login from "pages/Login";

import logo from "resources/assets/logo.svg";
import { render } from "@testing-library/react";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <nav>
            <div>
                <div className="container-img">
                    <a href="/"><img className="logo" src={logo} /></a>
                </div>
                <SearchBar/>
                {/* <a href="/">Home</a> */}
                {/* <a href="/about">About</a> */}
                {/* <a href="/contact">Contact</a> */}

                {/* <Link to="/login">Login</Link> */}
                <NavLink activeClassName="active" to="/login">Login</NavLink>
            </div>
          </nav>

          <Switch>
            {/* <Route path="*" component={NotFound} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} /> 
            {/* <Route path="/register" component={Pages} /> */}
          </Switch>
        </main>
      </Router>
    );
  }
}

function SearchBar() {
    return (
        <Fragment>
            <div className="search">
                <div className="container-img"><img className="icon" src={logo}/></div>
            </div>
        </Fragment>
    );
}

export default Nav;
