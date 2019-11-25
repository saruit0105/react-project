import React, { Component } from "react";
import axios from "axios";

class MoreRandoms extends Component {
  state = {
    randomRecipeArr: null,
    selectedRecipe: []
  };

  componentDidMount() {
    console.log("mounted", this);
    if (this.props.location.state) {
      //We are coming from the details page
      const data = JSON.parse(localStorage.getItem("randomRecipes"));
      this.setState({ randomRecipeArr: data });
    } else {
      //We are coming from the homepage
      localStorage.clear();
      this.randomRecipes();
    }
  }

  randomRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.REACT_APP_SPOON}`
      );
      this.setState({ randomRecipeArr: data });
      localStorage.setItem("randomRecipes", JSON.stringify(data));
      console.log(data.recipes);
    } catch (e) {
      console.log("Error fetching Recipes", e);
    }
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    console.log(id);
    history.push(`/content/singleRecipe/${id}`);
  };

  handleDeleteClick = id => () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON}`
      )
      .then(newItem => {
        const clonedArr = [...this.state.randomRecipeArr.recipes].concat(
          newItem.data.recipes
        );
        console.log(id);
        clonedArr.splice(id, 1);
        console.log(clonedArr, newItem.data);
        this.setState({
          randomRecipeArr: { recipes: clonedArr }
        });
      });
    // const newClonedArr = [...clonedArr.recipes, newItem.recipes];
  };

  handleClick = eachRecipe => {
    axios.post("https://ironrest.herokuapp.com/saruit", eachRecipe);
    alert("Saved!");
  };

  saveRecipe = eachRecipe => {
    axios.post("https://ironrest.herokuapp.com/saruit", eachRecipe);
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
              <button onClick={this.handleDeleteClick(eachRecipe)}>
                Not a fan
              </button>
              <button onClick={this.handleRecipeClick(eachRecipe.id)}>
                Show details!
              </button>
              <button onClick={e => this.handleClick(eachRecipe)}>
                Save this!
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default MoreRandoms;
