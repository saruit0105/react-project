import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: "",
    searchResults: null
  };
  handleSearch = e => {
    const search = e.target.value;
    this.setState({ searchTerm: search });
    console.log(search);
  };
  getSearchResults = () => {
    let query = `https://api.spoonacular.com/recipes/search?query=${this.state.searchTerm}number=5&apiKey=${process.env.REACT_APP_SPOON}`;
    console.log(query);
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?query=${this.state.searchTerm}&number=5&apiKey=${process.env.REACT_APP_SPOON}`
      )
      .then(results => this.setState({ searchResults: results }));
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    console.log(id);
    history.push(`/content/singleRecipe/${id}`);
  };
  searchList = () => {
    const { searchResults } = this.state;
    if (searchResults !== null) {
      console.log(searchResults.data.results);
      const list = searchResults.data.results.map(
        eachResults => (
          <div className="randomRecipeCard">
            <div>
              <img
                src={`https://spoonacular.com/recipeImages/${eachResults.image}`}
                alt="food pic"
              />
            </div>
            <ul>
              <li> {eachResults.title}</li>
            </ul>
            <button onClick={this.handleRecipeClick(eachResults.id)}>
              Show details!
            </button>
          </div>
        )
        // console.log(eachResults)
      );
      return list;
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleSearch}
          onKeyDown={event => {
            console.log(event);
            if (event.keyCode === 13) {
              console.log("hello");
              this.getSearchResults();
            }
          }}
        />
        {this.searchList()}
      </div>
    );
  }
}

export default Search;
