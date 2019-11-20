import React from "react";
import { Route } from "react-router-dom";
import { RandomRecipe } from ".";

const Content = ({ history }) => {
  const handleHomeClick = () => history.push("/");
  return (
    <div className="mainContent">
      <button onClick={handleHomeClick}> Go Back</button>
      <Route path="/content/random" component={RandomRecipe} />
    </div>
  );
};

export default Content;
