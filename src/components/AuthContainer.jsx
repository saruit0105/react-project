import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const AuthContainer = ({ children }) => {
  const context = useContext(UserContext);
  const { user, signIn } = context;

  const authenticate = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?nat=us');
    const user = data.results[0];
    signIn(user);
  };

  if (user) return children;

  return (
    <div>
      <h2>Login</h2>
      <button onClick={authenticate}>Click me</button>
    </div>
  );
};

export default AuthContainer;
