import React, { Component } from 'react';
import axios from 'axios';

class SingleRecipe extends Component {
  state = { steps: [], ingredients: [] };

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = async () => {
    try {
      const { match } = this.props;
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${match.params.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOON}`,
      );
      const { steps, ingredients } = data[0].steps.reduce(
        (acc, { step, ingredients }) => {
          acc.steps.push(step);
          const updatedIngredients = acc.ingredients.concat(ingredients);
          return { ...acc, ingredients: updatedIngredients };
        },
        { steps: [], ingredients: [] },
      );
      this.setState({ steps, ingredients });
    } catch (e) {
      console.log('Error fetching Recipes', e);
    }
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push({
      pathname: '/content/morerandoms',
      state: { from: location.pathname },
    });
  };

  saveRecipe = () => axios.post('https://ironrest.herokuapp.com/saruit', this.state);

  render() {
    const { steps, ingredients } = this.state;
    return (
      <div className="listItems">
        <button onClick={this.handleGoBack}> Back to my recipes</button>
        <h1>Directions :</h1>
        {steps.map(step => (
          <div key={step}>
            <p>{step}</p>
          </div>
        ))}
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <span></span>
      </div>
    );
  }
}

export default SingleRecipe;
