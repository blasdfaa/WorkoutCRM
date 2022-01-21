import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context";
import { authRoutes, routes } from "../routes";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      {authRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
