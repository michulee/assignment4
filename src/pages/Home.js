import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import "styles/components/_home.scss";
import logo from "assets/logo.svg";
import Card from "components/Card.js";

export default function Home(props) {
//   const recipe = props.recipe;
    const recipe = [0];
  const recipeItems = recipe.map((item) => (
    // <Card key={props.id}/>
    <Card key="" />
  ));
  return (
    <Fragment>
      {/* <Menu /> */}

      {/* <Card /> */}
      {/* <Card /> */}

      {recipeItems}
    </Fragment>
  );
}
