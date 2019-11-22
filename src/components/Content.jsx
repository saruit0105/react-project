import { Switch, Route } from "react-router-dom";
import { RandomRecipe, MoreRandoms, SingleRecipe, Search } from ".";
import React from "react";

const Content = ({ history }) => {
  const handleHomeClick = () => history.push("/");

  return (
    <div className="mainContent">
      <button onClick={handleHomeClick}> Go Back</button>
      <Switch>
        <Route path="/content/random" component={RandomRecipe} />
        <Route path="/content/moreRandoms" component={MoreRandoms} />
        <Route path="/content/singleRecipe/:id" component={SingleRecipe} />
        <Route path="/content/Search" component={Search} />
      </Switch>
    </div>
  );
};

export default Content;
