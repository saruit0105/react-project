import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseStringifiedJSON } from '../../helpers';
import './RecipeCards.css';

const RecipeCards = ({
  id,
  image,
  title,
  dishTypes,
  diets,
  handleRecipeClick,
  handleSaveRecipe,
  handleDeleteClick,
  eachRecipe,
}) => {
  return (
    <div key={id} className="card">
      <div>
        <img src={image} alt="food pics" />
        <p>
          <strong>{title}</strong>
        </p>
        <div className="frontLists">
          <ul>
            <p>
              <strong>Dish type</strong>
            </p>
            {dishTypes.map((eachType) => (
              <li>{eachType}</li>
            ))}
            :
          </ul>
          <ul>
            <p>
              <strong>Diet type</strong>
            </p>
            {diets.map((eachDiet) => (
              <li>{eachDiet}</li>
            ))}
          </ul>
        </div>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">
            <button className="cardButtons" onClick={handleDeleteClick(id)}>
              Not a fan
            </button>
          </div>
        </div>
        <div class="stat border">
          <button className="cardButtons" onClick={handleRecipeClick(id)}>
            Show details!
          </button>
        </div>
        <div class="stat">
          <div class="value">
            <button className="cardButtons" onClick={handleSaveRecipe(eachRecipe)}>
              Save this!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
