import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Register from './Components/Register/';
import NavigationBar from './Components/NavigationBar/';
import Login from './Components/Login/';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <NavigationBar/>
      <Switch>
          <Route path="/register">
          <Register/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
