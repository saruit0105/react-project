// import React, { Component } from 'react';
// import axios from 'axios';
// class Search extends Component {
//   state = {
//     searchTerm: '',
//     searchResults: [],
//   };

//   handleSearch = e => {
//     const search = e.target.value;
//     this.setState({ searchTerm: search });
//   };

//   getSearchResults = async e => {
//     const { searchTerm } = this.state;
//     e.preventDefault();
//     const { data } = await axios.get(
//       `https://api.spoonacular.com/recipes/search?query=${searchTerm}&number=5&apiKey=${process.env.REACT_APP_SPOON}`,
//     );
//     this.setState({ searchResults: data.results || [] });
//   };

//   handleRecipeClick = id => () => {
//     const { history } = this.props;
//     history.push(`/content/singleRecipe/${id}`);
//   };
//   handleSaveRecipe = recipe => async () => {
//     await axios.post('https://ironrest.herokuapp.com/saruit', recipe);

//     alert('Saved!');
//   };

//   render() {
//     const { searchResults } = this.state;
//     return (
//       <div>
//         <form className="form-inline" onSubmit={this.getSearchResults}>
//           <i className="fas fa-search" aria-hidden="true"></i>
//           <input
//             className="form-control form-control-sm ml-3 w-75"
//             type="text"
//             placeholder="Search"
//             aria-label="Search"
//             onChange={this.handleSearch}
//           />
//         </form>
//         {searchResults.map(eachResult => (
//           <div key={eachResult.id} className="randomRecipeCard">
//             <div>
//               <img src={`https://spoonacular.com/recipeImages/${eachResult.image}`} alt="food pic" />
//             </div>
//             <ul>
//               <li> {eachResult.title}</li>
//             </ul>
//             <button onClick={this.handleRecipeClick(eachResult.id)}>Show details!</button>
//             <button onClick={this.handleSaveRecipe(eachResult)}>Save this!</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Search;
