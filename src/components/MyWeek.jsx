import React, { Component } from 'react';
import axios from 'axios';
import { parseStringifiedJSON } from '../helpers';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class MyWeek extends Component {
  state = {
    savedRecipe: null,
    mappedRecipes: {},
  };

  componentDidMount() {
    this.fetchSavedRecipes();
  }

  fetchSavedRecipes = async () => {
    try {
      const { data } = await axios.get('https://ironrest.herokuapp.com/saruit');
      this.setState({ savedRecipe: data });
      let newItems = parseStringifiedJSON(localStorage.getItem('WEEKLY_RECIPE'), []);
      return this.setState({ mappedRecipes: newItems });
    } catch (e) {
      console.log('Error fetching Recipes', e);
    }
  };

  handleSelectDayForRecipe = recipeTitle => e => {
    const selectedDay = e.target.value;
    const { mappedRecipes } = this.state;
    const currentRecipesForSelectedDay = mappedRecipes[selectedDay] || [];
    const isDuplicate = currentRecipesForSelectedDay.some(recipe => recipe === recipeTitle);
    !isDuplicate && currentRecipesForSelectedDay.push(recipeTitle);
    this.setState({ mappedRecipes: { ...mappedRecipes, [selectedDay]: currentRecipesForSelectedDay } });

    let newItems = {};
    if (localStorage.getItem('WEEKLY_RECIPE')) {
      newItems = JSON.parse(localStorage.getItem('WEEKLY_RECIPE'));
    }

    newItems[selectedDay] ? newItems[selectedDay].push(recipeTitle) : (newItems[selectedDay] = [recipeTitle]);

    localStorage.setItem('WEEKLY_RECIPE', JSON.stringify(newItems));
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    history.push(`/content/singleRecipe/${id}`);
  };

  render() {
    const { savedRecipe, mappedRecipes } = this.state;

    return (
      <div className="week">
        <ul>
          {days.map(eachDay => (
            <div key={eachDay}>
              <h1>{eachDay}</h1>
              <ul>
                {(mappedRecipes[eachDay] || []).map(recipe => (
                  <li key={recipe}>{recipe}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <container className=" weeklyList">
          <ul className="list-group">
            <h1> Saved Recipes</h1>
            {(savedRecipe || []).map(eachSaved => (
              <li key={eachSaved.id} className="list-group-item weekgroup">
                <img src={eachSaved.image} alt="" />
                {eachSaved.title}
                <select onChange={this.handleSelectDayForRecipe(eachSaved.title)}>
                  <option value=""> </option>
                  {days.map(eachDay => (
                    <option key={eachDay} value={eachDay}>
                      {eachDay}
                    </option>
                  ))}
                </select>
                <button onClick={this.handleRecipeClick(eachSaved.id)}>Show details!</button>
              </li>
            ))}
          </ul>
        </container>
      </div>
    );
  }
}

export default MyWeek;
