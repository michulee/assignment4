import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

import "./Nav.scss";

import logo from "resources/assets/logo.svg";
import { render } from "@testing-library/react";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <div className="container-img">
            <a href="/">
              <img className="logo" src={logo} />
            </a>
          </div>
          <SearchBar />
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </div>
      </nav>
    );
  }
}

function SearchBar() {
  return (
    <Fragment>
      <div className="search">
        <div className="container-img">
          <img className="icon" src={logo} />
        </div>
      </div>
    </Fragment>
  );
}

export default Nav;
