import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Content } from "./components";

console.log(process.env);

const App = () => (
  <div className="App">
    <Route path="/" component={Home} exact />
    <Route path="/content" component={Content} />
  </div>
);

export default App;
