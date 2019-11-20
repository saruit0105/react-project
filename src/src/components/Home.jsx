import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "My calendar", path: "/content/calendar", className: "calendar" },
  {
    label: "Random recipes",
    path: "/content/random",
    className: "randomRecipes"
  },
  { label: "Search for a recipe", path: "/content/search", className: "Search" }
];

const Home = () =>
  links.map(link => (
    <button className={`${link.className} homeLink`}>
      <Link to={link.path}>{link.label}</Link>
    </button>
  ));

export default Home;
