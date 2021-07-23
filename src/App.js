import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

//test change comment

function App() {

  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res => {
      localStorage.removeItem('token');
      window.location.href = "/";
    })
    .catch(err => {
      console.log(err);
    });

  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logout}>logout</a>
        </header> 

        <Switch>


        <PrivateRoute exact path="/bubblepage" component={BubblePage} />
        <Route exact path="/" component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.