import "./App.css";
import React, { Component } from "react";
import HomeTemplate from "./container/HomeTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeHome, routesAdmin } from "./router";
import BackToTop from "./components/BackToTop";

import { connect } from "react-redux";
import { USER_LOGIN_SUCCESS } from "./container/HomeTemplate/AccUser/Login/modules/constant";
import { createAction } from "./container/HomeTemplate/AccUser/Login/modules/actionforLogin";
import PageNotFound from "./container/PageNotFound";
import AdminTemplate from "./container/AdminTemplate";
import { actLoginSuccess } from './container/AdminTemplate/AuthPage/modules/action';
import AuthPage from "./container/AdminTemplate/AuthPage";

class App extends Component {
  render() {
    const showLayoutHome = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    const showLayoutAdmin = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <AdminTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    return (
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routeHome)}
          {showLayoutAdmin(routesAdmin)}
          {/* Auth */}
          <Route path="/auth" component={AuthPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
        <BackToTop />
      </BrowserRouter>
    );


  }
  _getLoginInLocal = () => {
    const user = localStorage.getItem("userKH");
    if (user) {
      this.props.dispatch(createAction(USER_LOGIN_SUCCESS, JSON.parse(user)));
    }
  };

  _getUserDataFromLocal = () =>{
    const userDataFromLocal = localStorage.getItem('UserAdmin');
    if (userDataFromLocal){
      this.props.dispatch(actLoginSuccess( JSON.parse(userDataFromLocal)))
    }
  };

  componentDidMount() {
    this._getLoginInLocal();
    this._getUserDataFromLocal();
  }
}




export default connect()(App);
