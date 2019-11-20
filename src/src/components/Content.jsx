import React from "react";
import { Route } from "react-router-dom";
import { RandomRecipe, MoreRandoms } from ".";

const Content = ({ history }) => {
  const handleHomeClick = () => history.push("/");
  return (
    <div className="mainContent">
      <button onClick={handleHomeClick}> Go Back</button>
      <Route path="/content/random" component={RandomRecipe} />
      <Route path="/content/moreRandoms" component={MoreRandoms} />
    </div>
  );
};

export default Content;
