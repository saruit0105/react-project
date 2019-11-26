import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
  const context = useContext(UserContext);
  const { user, signOut } = context;
  console.log(user);
  return (
    <nav className="navbar navbar-light mainNav">
      <button onClick={signOut} className="btn btn-danger">
        Sign out
      </button>

      <h1 style={{ fontSize: '15px' }}>
        <img src={user.picture.thumbnail} alt="" />
        {user.email}
      </h1>
    </nav>
  );
};

export default NavBar;
