import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav
        ref={this.myRef}
        onScroll={this.onScroll}
        className="navbar navbar-expand-md navbar-light justify-content-between"
        id="navbars"
      >
        <div className="navbar-star " style={{ width: 150 }}>
          <NavLink className="nav-link navbar-brand" to="/">
            <img
              src="./img/public/web-logo.png"
              width="40px"
              height="40px"
              alt=""
            />
          </NavLink>
        </div>
        {/* responsive */}
        <div className="menu-wraps d-block d-md-none">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menus">
            <div>
              <div>
                <ul>
                  <li className="nav-item bg-orange py-3">
                    <h4 className="text-light">MENU</h4>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/" width="100%">
                      Trang chủ
                    </NavLink>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <NavLink to="/cumrap">Cụm rạp</NavLink>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <a href="#LienHe">Liên hệ</a>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <a href="#DoiTac">Tin tức</a>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <a href="#DoiTac">Ứng dụng</a>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <User />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarScroll"
          style={{ flexGrow: "unset" }}
        >
          <div className="navbar-center">
            <ul
              className="navbar-nav mr-auto my-2 my-md-0 navbar-nav-scroll"
              style={{ maxHeight: 100 }}
            >
              <li className="nav-item active">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Trang chủ<span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#LienHe">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#DoiTac">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#DoiTac">
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-none d-md-block">
          <form className="d-flex">
            <User />
          </form>
        </div>
      </nav>
    );
  }
}
