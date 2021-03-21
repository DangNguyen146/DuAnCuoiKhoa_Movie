import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutApi } from "./../../../container/HomeTemplate/AccUser/Login/modules/actionforLogin";

class User extends Component {
  handelOnLogout = () => {
    this.props.fectchLogOut();
  };
  render() {
    if (this.props.userLoginReducer) {
      return (
        <div id="propDownUser">
          <div className="d-none d-md-block">
            <div className="dropdown dropdown-5">
              <span className="pr-2">
                Chào, {this.props.userLoginReducer.hoTen}
              </span>
              <i className="fa fa-angle-down"></i>
              <ul className="dropdown_menu dropdown_menu-5">
                <li className="dropdown_item-1">
                  <i className="fa fa-history"></i>Lịch sử đặt vé
                </li>
                <li className="dropdown_item-2">
                  <i className="fa fa-user"></i>Thông tin cá nhân
                </li>
                <li className="dropdown_item-3">
                  <i className="fa fa-user-edit"></i>Cập nhật thông tin
                </li>
                <li className="dropdown_item-4">
                  <NavLink
                    onClick={() => {
                      this.handelOnLogout();
                    }}
                    to="/"
                  >
                    <i className="fa fa-sign-out-alt"></i>Đăng xuất
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-block d-md-none">
            <p className="mb-1 text-redorange">
              Chào, {this.props.userLoginReducer.hoTen}
            </p>
            <NavLink
              className="btn text-redorange btn-outline-redorange btn-focus"
              to="/"
            >
              Quản lí tài khoản
            </NavLink>
            <div className="p-2"></div>
            <NavLink
              className="btn btn-redorange btn-focus"
              onClick={() => {
                this.handelOnLogout();
              }}
              to="/"
            >
              Đăng xuất
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink
            className="btn btn-redorange btn-focus mr-2"
            type="submit"
            onClick={() => {
              localStorage.setItem("createAcc", JSON.stringify("false"));
            }}
            to="/login"
          >
            Đăng nhập
          </NavLink>
          <NavLink
            className="btn btn-outline-redorange btn-focus mr-2"
            type="submit"
            onClick={() => {
              localStorage.setItem("createAcc", JSON.stringify("true"));
            }}
            to="/login"
          >
            Đăng kí
          </NavLink>
        </div>
      );
    }
  }
}
const mapStapToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    err: state.userLoginReducer.err,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fectchLogOut: () => {
      dispatch(LogoutApi());
    },
  };
};

export default connect(mapStapToProps, mapDispatchToProps)(User);
