import { Switch, Route } from "react-router-dom";
import { RandomRecipe, MoreRandoms, SingleRecipe, Search, MyWeek } from ".";
import React from "react";

const Content = ({ history, location }) => {
  const handleHomeClick = () => history.push("/");
  //const handleHomeClick = () => history.goBack();
  // const handleHomeClick = () =>
  //   history.push({
  //     pathname: "/content/morerandoms",
  //     state: {
  //       from: location.pathname
  //     }
  //   });

  return (
    <div className="mainContent">
      <button onClick={handleHomeClick}> Go Back</button>
      <Switch>
        <Route path="/content/random" component={RandomRecipe} />
        <Route path="/content/week" component={MyWeek} />
        <Route path="/content/moreRandoms" component={MoreRandoms} />
        <Route path="/content/singleRecipe/:id" component={SingleRecipe} />
        <Route path="/content/Search" component={Search} />
      </Switch>
    </div>
  );
};

export default Content;
