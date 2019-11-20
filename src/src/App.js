import "./App.css";
import React, { Component } from "react";
import RandomRecipe from "./components/RandomRecipe";

console.log(process.env);

class App extends Component {
  render() {
    return (
      <div>
        <RandomRecipe />
      </div>
    );
  }
}

export default App;
