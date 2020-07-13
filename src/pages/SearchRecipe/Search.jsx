import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ history }) => {
  const [searchTerm, changeSearchTerm] = useState('');
  const [searchResults, changeResults] = useState([]);

  const handleSearch = (e) => {
    const search = e.target.value;
    changeSearchTerm(search);
  };

  const getSearchResults = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/search?query=${searchTerm}&number=5&apiKey=95859f3f50c14910a0397cbfcc0d6e9d`,
    );
    changeResults(data.results || []);
  };

  const handleRecipeClick = (id) => () => {
    history.push(`/content/singleRecipe/${id}`);
  };
  const handleSaveRecipe = (recipe) => async () => {
    await axios.post('https://ironrest.herokuapp.com/saruit', recipe);

    alert('Saved!');
  };

  return (
    <div>
      <form className="form-inline" onSubmit={getSearchResults}>
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearch}
        />
      </form>
      {searchResults.map((eachResult) => (
        <div key={eachResult.id} className="randomRecipeCard">
          <div>
            <img src={`https://spoonacular.com/recipeImages/${eachResult.image}`} alt="food pic" />
          </div>
          <ul>
            <li> {eachResult.title}</li>
          </ul>
          <button onClick={handleRecipeClick(eachResult.id)}>Show details!</button>
          <button onClick={handleSaveRecipe(eachResult)}>Save this!</button>
        </div>
      ))}
    </div>
  );
};

export default Search;

// `https://api.spoonacular.com/recipes/search?query=${searchTerm}&number=5&apiKey=${process.env.REACT_APP_SPOON}`
