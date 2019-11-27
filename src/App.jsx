import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { Home, Content, AuthContainer, NavBar, NotFound } from './components';
import './App.css';

const App = () => (
  <UserContextProvider>
    <div className="App">
      <AuthContainer>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/content" component={Content} />
          <Route component={NotFound} />
        </Switch>
      </AuthContainer>
    </div>
  </UserContextProvider>
);

export default App;
