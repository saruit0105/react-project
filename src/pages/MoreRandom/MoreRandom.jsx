import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseStringifiedJSON } from '../../helpers';
import { RecipeCards } from '../../components';
import './MoreRandom.css';

const MoreRandom = ({ location, history }) => {
  const [randomRecipes, changeRecipes] = useState([]);

  const fetchRecipes = async () => {
    //We are coming from the details page
    if (location.state) {
      const randomRecipes = parseStringifiedJSON(localStorage.getItem('RANDOM_RECIPES'), []);
      return changeRecipes(randomRecipes);
    }
    try {
      //We are coming from the homepage
      localStorage.clear();
      const { data } = await axios.get(
        'https://api.spoonacular.com/recipes/random?number=3&apiKey=95859f3f50c14910a0397cbfcc0d6e9d',
      );
      const { recipes } = data;

      changeRecipes(recipes);
      localStorage.setItem('RANDOM_RECIPES', JSON.stringify(recipes));
    } catch (e) {
      console.log('Error fetching Recipes', e);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleRecipeClick = (id) => () => {
    history.push(`/content/singleRecipe/${id}`);
  };

  const handleDeleteClick = (id) => async () => {
    const { data } = await axios.get(
      'https://api.spoonacular.com/recipes/random?&apiKey=95859f3f50c14910a0397cbfcc0d6e9d',
    );
    const newRecipes = [...randomRecipes, ...data.recipes].filter((recipe) => recipe.id !== id);
    changeRecipes(newRecipes);
    localStorage.setItem('RANDOM_RECIPES', JSON.stringify(newRecipes));
  };

  const handleSaveRecipe = (recipe) => async () => {
    await axios.post('https://ironrest.herokuapp.com/saruit', recipe);
    alert('Saved!');
  };

  return (
    <div className="recipeCards">
      {randomRecipes.map((eachRecipe) => (
        <RecipeCards
          id={eachRecipe.id}
          image={eachRecipe.image}
          title={eachRecipe.title}
          dishTypes={eachRecipe.dishTypes}
          diets={eachRecipe.diets}
          handleRecipeClick={handleRecipeClick}
          handleSaveRecipe={handleSaveRecipe}
          handleDeleteClick={handleDeleteClick}
          eachRecipe={eachRecipe}
        />
      ))}
    </div>
  );
};

export default MoreRandom;
