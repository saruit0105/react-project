import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'My Week', path: '/content/week', className: 'week' },
  {
    label: 'Random Recipes',
    path: '/content/random',
    className: 'randomRecipes',
  },
  {
    label: 'Search for a recipe',
    path: '/content/search',
    className: 'Search',
  },
  {
    label: 'Lots of Recipes',
    path: '/content/morerandoms',
    className: 'lotsOfRandoms',
  },
];

const Home = () =>
  links.map(({ className, path, label }) => (
    <button key={path} className={`${className} homeLink`}>
      <Link to={path}>{label}</Link>
    </button>
  ));

export default Home;
