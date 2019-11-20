import React, { Component } from "react";
import axios from "axios";

class RandomRecipe extends Component {
  state = {
    singleRecipe: null,
    randomRecipeArr: []
  };

  componentDidMount() {
    this.fetchRecipes();
    this.randomRecipes();
  }

  fetchRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON}`
      );
      this.setState({ singleRecipe: data });
      console.log(data.recipes[0]);
    } catch (e) {
      console.log("Error fetching Recipes", e);
    }
  };

  randomRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.REACT_APP_SPOON}`
      );
      // this.setState({ singleRecipe: data });
      console.log(data.recipes);
    } catch (e) {
      console.log("Error fetching Recipes", e);
    }
  };

  render() {
    const { singleRecipe } = this.state;
    return (
      <div>
        <div className="randomRecipeCard">
          {singleRecipe && (
            <div>
              <img src={singleRecipe.recipes[0].image} alt="food pics" />
              <p>
                <strong>{singleRecipe.recipes[0].title}</strong>
              </p>
              <div className="frontLists">
                <ul>
                  <p>
                    <strong>Dish type</strong>
                  </p>
                  {singleRecipe.recipes[0].dishTypes.map(eachType => (
                    <li>{eachType}</li>
                  ))}
                </ul>
                <ul>
                  <p>
                    <strong>Diet type</strong>
                  </p>
                  {singleRecipe.recipes[0].diets.map(eachDiet => (
                    <li>{eachDiet}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <button>Not a fan</button>
          <button>Save this!</button>
        </div>
      </div>
    );
  }
}

export default RandomRecipe;

//  {singleRecipe.recipes[0].diet.length > 0 &&
//         singleRecipe.recipes[0].diets.map(eachDiet => (
//           <li>{eachDiet}</li>
//         ))}
//       {!singleRecipe.recipes[0].diet.length && <p> Not listed</p>}}

// {
//   singleRecipe && (
//     <div>
//       <img src={singleRecipe.recipes[0].image} alt="food pics" />
//       <p>
//         <strong>{singleRecipe.recipes[0].title}</strong>
//       </p>
//       <div className="frontLists">
//         <ul>
//           <p>
//             <strong>Dish type</strong>
//           </p>
//           {singleRecipe.recipes[0].dishTypes.map(eachType => (
//             <li>{eachType}</li>
//           ))}
//         </ul>
//         <ul>
//           <p>
//             <strong>Diet type</strong>
//           </p>
//           {singleRecipe.recipes[0].diets.map(eachDiet => (
//             <li>{eachDiet}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
