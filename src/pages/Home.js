import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import "styles/components/_home.scss";
import logo from "assets/logo.svg";
import Card from "components/Card.js";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Card/>
      </Fragment>
    );
  }
}

function HomeSearch() {
    return (
        <Fragment>
            <div className="search">
                <div className="container-img"><img className="icon" src={logo}/></div>
            </div>
        </Fragment>
    );
}

function Feed() {
    return (
        <Fragment>
            <div className="home">
                <p>Test</p>
            </div>
        </Fragment>
    );
}

export default Home;
