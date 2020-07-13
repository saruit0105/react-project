import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MoreRandom, DetailedRecipe, SearchRecipe, Weekly } from '../pages';

const Content = ({ history }) => {
  const handleHomeClick = () => history.push('/');

  return (
    <div className="mainContent">
      <button onClick={handleHomeClick} className="homeButton btn btn-success">
        Go Back
      </button>
      <Switch>
        <Route path="/content/week" component={Weekly} />
        <Route path="/content/moreRandoms" component={MoreRandom} />
        <Route path="/content/singleRecipe/:id" component={DetailedRecipe} />
        <Route path="/content/Search" component={SearchRecipe} />
      </Switch>
    </div>
  );
};

export default Content;
