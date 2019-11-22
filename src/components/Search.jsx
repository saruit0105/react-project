import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: ""
  };
  handleSearch = e => {
    const search = e.target.value;
    this.setState({ searchTerm: search });
    console.log(search);
  };
  getSearchResults = () => {
    let query = `https://api.spoonacular.com/recipes/search?query=${this.state.searchTerm}number=10&apiKey=${process.env.REACT_APP_SPOON}`;
    console.log(query);
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?query=${this.state.searchTerm}&number=10&apiKey=${process.env.REACT_APP_SPOON}`
      )
      .then(results => console.log(results));
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
      </div>
    );
  }
}

export default Search;
