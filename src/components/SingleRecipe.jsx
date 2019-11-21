import React, { Component } from "react";
import axios from "axios";
import MoreRandoms from "./MoreRandoms";

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
      // console.log(theRecipe)
      let copy = theRecipe.steps.map(
        eachRecipe => console.log(eachRecipe)
        // return {
        // <div>
        //   <p>{eachRecipe.step}</p>
        // </div>
        // }
      );
      return copy;
    }
  };

  // ingredientDetails = () => {
  //   console.log("running the details function");
  //   const { theRecipe } = this.state;

  //   if (theRecipe !== null) {
  //     let ingredients = theRecipes.steps.
  //   }
  // }

  render() {
    // const { theRecipe } = this.state;
    this.recipeDetails();
    console.log("this is the single recipe page");
    return <div>{this.recipeDetails()}</div>;
  }
}

export default SingleRecipe;
