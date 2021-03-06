import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './NavBar.css';

const NavBar = () => {
  const context = useContext(UserContext);
  const { user, signOut } = context;

  return (
    <nav className="navbar navbar-light mainNav">
      <button onClick={signOut} className="btn btn-danger">
        Sign out
      </button>

      <h1 className="header">
        <img src={user.picture.thumbnail} alt="" />
        {user.email}
      </h1>
    </nav>
  );
};

export default NavBar;
