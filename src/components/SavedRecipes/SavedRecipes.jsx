import React from 'react';
import './SavedRecipes.css';

const SavedRecipes = ({ savedRecipe, days, handleRecipeClick, handleSelectDayForRecipe }) => {
  return (
    <container className=" weeklyList">
      <ul className="list-group">
        <h1> Saved Recipes</h1>
        {(savedRecipe || []).map((eachSaved) => (
          <li key={eachSaved.id} className="list-group-item weekgroup">
            <img src={eachSaved.image} alt="" />
            {eachSaved.title}
            <select onChange={handleSelectDayForRecipe(eachSaved.title)}>
              <option value=""> </option>
              {days.map((eachDay) => (
                <option key={eachDay} value={eachDay}>
                  {eachDay}
                </option>
              ))}
            </select>
            <button onClick={handleRecipeClick(eachSaved.id)}>Show details!</button>
          </li>
        ))}
      </ul>
    </container>
  );
};

export default SavedRecipes;
