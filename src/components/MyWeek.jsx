import React, { Component } from "react";
import axios from "axios";
const days = [
  { day: "Monday" },
  { day: "Tuesday" },
  { day: "Wednesday" },
  { day: "Thursday" },
  { day: "Friday" },
  { day: "Saturday" },
  { day: "Sunday" }
];
class MyWeek extends Component {
  state = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
    savedRecipe: null
  };

  componentDidMount() {
    this.fetchSavedRecipes();
  }

  fetchSavedRecipes = async () => {
    try {
      const { data } = await axios.get("https://ironrest.herokuapp.com/saruit");
      this.setState({ savedRecipe: data });
      console.log(data);
    } catch (e) {
      console.log("Error fetching Recipes", e);
    }
  };

  daySelected = (event, title) => {
    if (event.target.value !== "") {
      console.log(event.target.value);
      const updatedDay = [...this.state[event.target.value]];
      updatedDay.push(
        this.state.savedRecipe.filter(recipe => recipe.title === title)
      );
      console.log(updatedDay[0][0].title);
      this.setState({
        [event.target.value]: updatedDay[0][0].title
      });
    } else return;
  };

  handleRecipeClick = id => () => {
    const { history } = this.props;
    console.log(id);
    history.push(`/content/singleRecipe/${id}`);
  };

  render() {
    const { savedRecipe, Monday } = this.state;
    return (
      <div className="week">
        <ul>
          {days.map(eachDay => (
            <div>
              <h1>{eachDay.day}</h1>
              <li>{Monday}</li>
            </div>
          ))}
        </ul>
        <container className="listItems">
          <ul className="list-group">
            <h1> Saved Recipes</h1>
            {savedRecipe &&
              savedRecipe.map(eachSaved => (
                <li className="list-group-item">
                  <img src={eachSaved.image} />
                  {eachSaved.title}
                  <select onChange={e => this.daySelected(e, eachSaved.title)}>
                    <option value=""> </option>
                    {days.map(eachDay => (
                      <option value={eachDay.day}>{eachDay.day}</option>
                    ))}
                  </select>
                  <button onClick={this.handleRecipeClick(eachSaved.id)}>
                    Show details!
                  </button>
                </li>
              ))}
          </ul>
        </container>
      </div>
    );
  }
}

export default MyWeek;
