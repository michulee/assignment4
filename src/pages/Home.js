import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="">Cooking Cards</h1>
        <Discover/>
        <New/>
        <Food/>
        <Locations/>
      </Fragment>
    );
  }
}

function Discover() {
    return (
        <Fragment>
            <div className="home">
                <p>Test</p>
            </div>
        </Fragment>
    );
}

function New() {
    return (
        <Fragment>
            <div className="section1">
                <p>Test</p>
            </div>
        </Fragment>
    );
}

function Food() {
    return (
        <Fragment>
            <div className="section2">
                <p>Test</p>
            </div>
        </Fragment>
    );
}

function Locations() {
    return (
        <Fragment>
            <div className="section3">
                <p>Test</p>
            </div>
        </Fragment>
    );
}

export default Home;
