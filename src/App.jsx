import React from 'react';
import { Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { Home, Content, AuthContainer, NavBar } from './components';
import './App.css';

const App = () => (
  <UserContextProvider>
    <div className="App">
      <AuthContainer>
        <NavBar />
        <Route path="/" component={Home} exact />
        <Route path="/content" component={Content} />
      </AuthContainer>
    </div>
  </UserContextProvider>
);

export default App;
