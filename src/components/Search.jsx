import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
  };

  handleSearch = e => {
    const search = e.target.value;
    this.setState({ searchTerm: search });
  };

  getSearchResults = async e => {
    const { searchTerm } = this.state;
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/search?query=${searchTerm}&number=5&apiKey=${process.env.REACT_APP_SPOON}`,
    );
    this.setState({ searchResults: data.results || [] });
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    history.push(`/content/singleRecipe/${id}`);
  };

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <form onSubmit={this.getSearchResults}>
          <input type="text" onChange={this.handleSearch} />
        </form>
        {searchResults.map(({ image, title, id }) => (
          <div key={id} className="randomRecipeCard">
            <div>
              <img src={`https://spoonacular.com/recipeImages/${image}`} alt="food pic" />
            </div>
            <ul>
              <li> {title}</li>
            </ul>
            <button onClick={this.handleRecipeClick(id)}>Show details!</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
