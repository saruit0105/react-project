import React, { Component } from 'react';
import axios from 'axios';
import { parseStringifiedJSON } from '../helpers';

class MoreRandoms extends Component {
  state = {
    randomRecipes: [],
    selectedRecipe: [],
  };

  componentDidMount() {
    this.randomRecipes();
  }

  randomRecipes = async () => {
    const { location } = this.props;
    //We are coming from the details page
    if (location.state) {
      const randomRecipes = parseStringifiedJSON(localStorage.getItem('RANDOM_RECIPES'), []);
      return this.setState({ randomRecipes });
    }
    try {
      //We are coming from the homepage
      localStorage.clear();
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.REACT_APP_SPOON}`,
      );
      const { recipes } = data;
      this.setState({ randomRecipes: recipes });
      localStorage.setItem('RANDOM_RECIPES', JSON.stringify(recipes));
    } catch (e) {
      console.log('Error fetching Recipes', e);
    }
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    history.push(`/content/singleRecipe/${id}`);
  };

  handleDeleteClick = id => async () => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON}`,
    );
    const newRecipes = [...this.state.randomRecipes, ...data.recipes].filter(recipe => recipe.id !== id);
    this.setState({ randomRecipes: newRecipes });
    localStorage.setItem('RANDOM_RECIPES', JSON.stringify(newRecipes));
  };

  handleSaveRecipe = recipe => async () => {
    await axios.post('https://ironrest.herokuapp.com/saruit', recipe);
    alert('Saved!');
  };

  render() {
    const { randomRecipes } = this.state;

    return (
      <div className="recipeCards">
        {randomRecipes.map(eachRecipe => (
          <div key={eachRecipe.id} className="card">
            <div>
              <img src={eachRecipe.image} alt="food pics" />
              <p>
                <strong>{eachRecipe.title}</strong>
              </p>
              <div className="frontLists">
                <ul>
                  <p>
                    <strong>Dish type</strong>
                  </p>
                  {eachRecipe.dishTypes.map(eachType => (
                    <li>{eachType}</li>
                  ))}
                </ul>
                <ul>
                  <p>
                    <strong>Diet type</strong>
                  </p>
                  {eachRecipe.diets.map(eachDiet => (
                    <li>{eachDiet}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="card-stats">
              <div class="stat">
                <div class="value">
                  <button className="cardButtons" onClick={this.handleDeleteClick(eachRecipe.id)}>
                    Not a fan
                  </button>
                </div>
              </div>
              <div class="stat border">
                <button className="cardButtons" onClick={this.handleRecipeClick(eachRecipe.id)}>
                  Show details!
                </button>
              </div>
              <div class="stat">
                <button className="cardButtons" onClick={this.handleSaveRecipe(eachRecipe)}>
                  Save this!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MoreRandoms;
