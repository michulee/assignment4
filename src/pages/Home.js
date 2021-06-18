import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import "styles/components/_home.scss";
import logo from "assets/logo.svg";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <HeroBanner/>
        <Feed/>
      </Fragment>
    );
  }
}

function HeroBanner() {
    return (
        <Fragment>
            <div className="hero_banner">
                <h1 className="">Cooking Cards</h1>
                <HomeSearch/>
            </div>
        </Fragment>
    );
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
