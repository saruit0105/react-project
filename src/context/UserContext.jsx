import React, { createContext, useState } from 'react';
import { parseStringifiedJSON } from '../helpers';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const storedUser = parseStringifiedJSON(sessionStorage.getItem('CURRENT_USER'), null);
  const [user, setUser] = useState(storedUser);

  const signIn = user => {
    setUser(user);
    sessionStorage.setItem('CURRENT_USER', JSON.stringify(user));
  };

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem('CURRENT_USER');
  };

  const value = { user, signIn, signOut };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
