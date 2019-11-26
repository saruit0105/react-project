import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

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

const Home = () => {
  const context = useContext(UserContext);
  const { user } = context;
  return (
    <div>
      {links.map(({ className, path, label }) => (
        <button key={path} className={`${className} homeLink`}>
          <Link to={path}>{label}</Link>
        </button>
      ))}
      <h1>
        Welcome {user.name.first} {user.name.last}
      </h1>
    </div>
  );
};

export default Home;
