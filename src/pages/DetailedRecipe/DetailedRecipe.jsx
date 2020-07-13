import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DetailedRecipe.css';

const SingleRecipe = ({ location, history, match }) => {
  const [steps, changeSteps] = useState([]);
  const [ingredients, changeIngredients] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${match.params.id}/analyzedInstructions?apiKey=95859f3f50c14910a0397cbfcc0d6e9d`,
      );
      const { steps, ingredients } = data[0].steps.reduce(
        (acc, { step, ingredients }) => {
          acc.steps.push(step);
          const updatedIngredients = acc.ingredients.concat(ingredients);
          return { ...acc, ingredients: updatedIngredients };
        },
        { steps: [], ingredients: [] },
      );
      changeSteps(steps);
      changeIngredients(ingredients);
    } catch (e) {
      console.log('Error fetching Recipes', e);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleGoBack = () => {
    history.push({
      pathname: '/content/morerandoms',
      state: { from: location.pathname },
    });
  };

  return (
    <div className="listItems recipeInstructions">
      <button onClick={handleGoBack} className="btn btn-warning">
        Back to my recipes
      </button>
      <h1>Directions :</h1>
      {steps.map((step) => (
        <div key={step}>
          <p className="recipeInstructions">{step}</p>
        </div>
      ))}
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(({ name }) => (
          <li key={name} className="recipeInstructions">
            {name}
          </li>
        ))}
      </ul>
      <span></span>
    </div>
  );
};

export default SingleRecipe;
