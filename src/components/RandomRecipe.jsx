import React, { Component } from 'react';
import axios from 'axios';

class RandomRecipe extends Component {
  state = { singleRecipe: null };

  componentDidMount() {
    this.fetchRecipes();
  }

  handleRecipeClick = id => () => {
    const { history } = this.props;
    history.push(`/content/singleRecipe/${id}`);
  };

  fetchRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON}`,
      );
      this.setState({ singleRecipe: data.recipes[0] });
    } catch (e) {
      console.log('Error fetching Recipes', e);
    }
  };

  render() {
    const { singleRecipe } = this.state;
    return (
      <div>
        <div className="randomRecipeCard">
          {singleRecipe && (
            <div>
              <img src={singleRecipe.image} alt="food pics" />
              <p>
                <strong>{singleRecipe.title}</strong>
              </p>
              <div className="frontLists">
                <ul>
                  <p>
                    <strong>Dish type</strong>
                  </p>
                  {singleRecipe.dishTypes.map(eachType => (
                    <li key={eachType}>{eachType}</li>
                  ))}
                </ul>
                <ul>
                  <p>
                    <strong>Diet type</strong>
                  </p>
                  {singleRecipe.diets.map(eachDiet => (
                    <li key={eachDiet}>{eachDiet}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <button>Not a fan</button>
          <button>More details!</button>
        </div>
      </div>
    );
  }
}

export default RandomRecipe;
