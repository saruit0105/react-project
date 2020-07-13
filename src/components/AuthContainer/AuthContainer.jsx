import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import './AuthContainer.css';

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
    <div className="auth">
      <h2>Log in or Sign up!</h2>
      <button onClick={authenticate} className="btn btn-primary">
        Login
      </button>
      <button className="btn btn-info"> Sign up</button>
    </div>
  );
};

export default AuthContainer;
