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
      const copy = theRecipe.steps.map(eachRecipe => (
        <div>
          <p>{eachRecipe.step}</p>
        </div>
      ));
      return copy;
    }
  };

  handleGoBack = () =>
    this.props.history.push({
      pathname: "/content/morerandoms",
      state: {
        from: this.props.location.pathname
      }
    });

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

  handleClick = e => {
    this.saveRecipe();
    console.log("im being clicked!");
  };

  saveRecipe = () => {
    axios.post("https://ironrest.herokuapp.com/saruit", this.state);
  };

  render() {
    // const { theRecipe } = this.state;
    this.recipeDetails();
    console.log("this is the single recipe page");
    return (
      <div className="listItems">
        <button onClick={this.handleGoBack}> Back to my recipes</button>
        <h1>Directions :</h1>
        {this.recipeDetails()}
        <h2>Ingredients</h2>
        {this.ingredientDetails()}
        <span></span>
      </div>
    );
  }
}

export default SingleRecipe;
