import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseStringifiedJSON } from '../../helpers';
import './SearchCards.css';

const SearchCards = ({ id, image, title, eachRecipe, handleRecipeClick, handleSaveRecipe }) => {
  return (
    <div key={id} className="card">
      <div>
        <img src={`https://spoonacular.com/recipeImages/${image}`} alt="food pics" />
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <button className="cardButtons" onClick={handleRecipeClick(id)}>
        Show details!
      </button>
      <button className="cardButtons" onClick={handleSaveRecipe(eachRecipe)}>
        Save this!
      </button>
    </div>
  );
};

export default SearchCards;
