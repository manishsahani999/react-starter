import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

// Support 
import { history } from "support/helpers";
import { __ROUTE_LOGIN, __ROUTE_DASHBOARD } from "support/helpers";
import { PrivateRoute } from "support/helpers";

/**
 * Components 
 * 
 * These the primary and secondary components used in the app, 
 * primary being those who serves a complete page (ex - Index) 
 * and the other helper components like LoadingBar are secondary
 * components.
 */
import LoadingBar from "react-redux-loading-bar";
import Index from "views/pages/Index";
import Login from "views/pages/Login";

/**
 * Dummy Component 
 * 
 * A placeholder for other components
 */
const Dashboard = () => <>Dashboard</>;

/**
 * App Component 
 * 
 * Main component of the application, contains routes, Loading bar,
 * and other components that appears on every screeen.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div>
        {/* Loading bar */}
        <div style={{ position: "relative", height: "5px", top: 0 }}>
          <LoadingBar style={{ backgroundColor: "#f11946", height: "5px" }} />
        </div>

        <Router history={history}>
          <Switch>

            {/* Public Routes  */}
            <Route exact path="/" render={(props) => <Index {...props} />} />
            <Route path={__ROUTE_LOGIN} component={Login} />

            {/* Private Route */}
            <PrivateRoute path={__ROUTE_DASHBOARD} component={Dashboard} {...props} />

            {/* Admin Routes */}
            {/* <EmployerRoute path={__ROUTE_DASHBOARD} component={Dashboard} {...props}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

// Redux components 
const mapStateToProps = (state) => ({
  auth: state.authentication,
  state: state,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
