import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { Content, AuthContainer, NavBar } from './components';
import { Home, NotFound } from './pages';
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
