import React, { Component } from "react";
import axios from "axios";

class SingleRecipe extends Component {
  state = { theRecipe: null };

  componentDidMount() {
    console.log("this is the details page bro");
    this.fetchRecipes();
    this.recipeDetails();
    // this.testRequest();
  }

  fetchRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${this.props.match.params.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOON}`
      );
      this.setState({ theRecipe: data[0] });
      console.log(data[0]);
    } catch (e) {
      console.log("Error fetching Recipes", e);
    }
  };

  recipeDetails = () => {
    console.log("running the details function");
    const { theRecipe } = this.state;

    if (theRecipe !== null) {
      console.log(theRecipe.steps);
      let copy = theRecipe.steps.map(eachRecipe => (
        <div>
          <p>{eachRecipe.step}</p>
        </div>
      ));
      return copy;
    }
  };

  ingredientDetails = () => {
    console.log("running the details function");
    const { theRecipe } = this.state;

    if (theRecipe !== null) {
      console.log(theRecipe.steps);
      let ingredientCopy = theRecipe.steps.map(
        eachRecipe => (eachRecipe = eachRecipe.ingredients)
      );
      ingredientCopy = ingredientCopy.flat(Infinity);
      return ingredientCopy.map(ingredient => (
        <ul>
          <li>{ingredient.name}</li>
        </ul>
      ));
    }
  };

  render() {
    // const { theRecipe } = this.state;
    this.recipeDetails();
    console.log("this is the single recipe page");
    return (
      <div>
        {this.recipeDetails()}
        {this.ingredientDetails()}
      </div>
    );
  }
}

export default SingleRecipe;
