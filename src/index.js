import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./../node_modules/react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import "ajax/lib/ajax.js";
import "fontawesome-4.7/css/font-awesome.min.css";
import "fontawesome-4.7/css/font-awesome.css";


// import "./assets/styles/adminAssets/css/main.css";
// import "./assets/styles/adminAssets/css/util.css";
// import "./assets/styles/adminAssets/css/style.css";
// import "./assets/styles/adminAssets/vendors/css/vendor.bundle.base.css";
// import "./assets/styles/adminAssets/vendors/mdi/css/materialdesignicons.min.css";
// // import "./assets/styles/adminAssets/css/calendar.css";
// import "./assets/styles/adminAssets/css/movie-style.css";
// import "./assets/styles/adminAssets/css/modal.css";
// import "./assets/styles/adminAssets/css/userProfile.css";
// import "./assets/styles/adminAssets/css/paper-dashboard.css";

// import "css-loader/dist/cjs.js";

import "./assets/styles/adminAssets/js/dashboard.js";
import "./assets/styles/adminAssets/js/todolist.js";
import "./assets/styles/adminAssets/js/pages.js";
import "./assets/styles/adminAssets/js/movie.js";
 import "./assets/styles/adminAssets/js/userProfile.js";


import "./css/main.css";
// import "./sass/main.scss";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";

import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "@material-ui/core";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App className="container-fluid" />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
