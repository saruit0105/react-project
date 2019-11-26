import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
  const context = useContext(UserContext);
  const { user, signOut } = context;
  console.log(user);
  return (
    <nav>
      <button onClick={signOut}> Sign out</button>
      <h1>
        <img src={user.picture.thumbnail} alt="" />
        {user.name.first} {user.name.last}
      </h1>
    </nav>
  );
};

export default NavBar;
