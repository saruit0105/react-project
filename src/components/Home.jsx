import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "My Week", path: "/content/week", className: "week" },
  {
    label: "Random Recipes",
    path: "/content/random",
    className: "randomRecipes"
  },
  {
    label: "Search for a recipe",
    path: "/content/search",
    className: "Search"
  },
  {
    label: "Lots of Recipes",
    path: "/content/morerandoms",
    className: "lotsOfRandoms"
  }
];

const Home = () =>
  links.map(link => (
    <button className={`${link.className} homeLink`}>
      <Link to={link.path}>{link.label}</Link>
    </button>
  ));

export default Home;
