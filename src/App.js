import React from "react";
import { Switch, Route } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "./styles/main.scss";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Switch>
      <PublicRoute exact path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
