import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * These are the constants used for routing 
 */
export const __ROUTE_LOGIN = '/login';
export const __ROUTE_BINGO = '/bingo';

/**
 * Private Routes Constants 
 *
 * These are the constants for the private routes.
 */
export const __ROUTE_DASHBOARD = '/app/dashboard';

/**
 * Wrapper on Routes for accessing private routes.
 * 
 * @param {JSX} Component 
 * @param {path} path
 * @param {object} ...props
 * @returns Route|Redirect
 */
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.auth.loggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: __ROUTE_LOGIN, state: { from: props.location } }}
            />
          )
      }
    />
  );
};

const AdminRoute = ({ component: Component, ...rest }) => {
  if (rest.auth && rest.auth.isEmployer) {
    return (
      <PrivateRoute
        component={Component}
        path={rest.path}
        auth={rest.auth}
        {...rest}
      />
    );
  }
  return <Redirect to={__ROUTE_LOGIN} />;
};