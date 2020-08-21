import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = true;

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
