import React, { Component } from "react";
import axios from "axios";

class MoreRandoms extends Component {
  state = {
    randomRecipeArr: null
  };

  componentDidMount() {
    this.randomRecipes();
  }

  randomRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.REACT_APP_SPOON}`
      );
      this.setState({ randomRecipeArr: data });
      console.log(data.recipes);
    } catch (e) {
      console.log("Error fetching Recipes", e);
    }
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    console.log(id);
    // localStorage.setItem("myID", id);
    // var storedId = localStorage.getItem("foodID");
    // console.log(storedId);
    history.push(`/content/singleRecipe/${id}`);
  };

  render() {
    const { randomRecipeArr } = this.state;
    return (
      <div>
        {randomRecipeArr &&
          randomRecipeArr.recipes.map(eachRecipe => (
            <div className="randomRecipeCard">
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
              <button>Not a fan</button>
              <button onClick={this.handleRecipeClick(eachRecipe.id)}>
                Show details!
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default MoreRandoms;