import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing pages
import Home from "./views/home";

//Importing Components
import Header from "./components/header";

// Importing Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Home/>
          </Route>
          <Route path="/register">
            <Home/>
          </Route>
          <Route path="/checkout">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
