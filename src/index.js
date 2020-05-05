/**
 * Kickstart for a React app with extended Redux architecture.
 * 
 * This kickstart template is built on the creative-tim's paper kit pro
 * react theme and extends redux architecture for state managment.
 * (theme) - <https://demos.creative-tim.com/paper-kit-pro-react/#/index>
 * 
 * @author Manish Sahnai <rec.manish.sahani@gmail.com>
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Styles for the app - we'll be using bootstrap's css and node-sass for 
// writing our own custom sass/scss.
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// Main component and the store 
import App from "views/App";
import { store } from "support/helpers";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
