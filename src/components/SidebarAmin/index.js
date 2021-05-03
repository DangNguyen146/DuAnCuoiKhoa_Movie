import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

class Sidebar extends Component {
  render() {

    return (
      <div >
      
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <NavLink to="/user-profile" className="nav-link">
                <div className="nav-profile-image">
                  <img
                    src=
                    {process.env.PUBLIC_URL + '/img/face1.jpg'}
                    alt="profile" />
                  <span className="login-status online" />
                  {/*change to offline or busy as needed*/}
                </div>
                {this.props.userData ? <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">{this.props.userData.hoTen}</span>
                  <span className="text-secondary text-small">{this.props.userData.maLoaiNguoiDung ? "Quản trị viên" : ""}</span>
                </div> : <>
                  <div></div>
                </>}

                <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
              </NavLink>
              <hr></hr>
            </li>
        
            <li className="nav-item">

              <NavLink
                className="nav-link"
                to="/dashboard"
              >
                <span className="menu-title">Dashboard</span>
                <i className="mdi mdi-home menu-icon" />
              </NavLink>

            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Quản lý người dùng</span>
                <i className="menu-arrow" />

                <i className="mdi mdi-account-key menu-icon" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <NavLink className="nav-link" to="/list-user">Danh sách người dùng</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/add-user">Thêm người dùng</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/user-profile">Thông tin cá nhân</NavLink></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic-2" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Quản lý phim</span>
                <i className="menu-arrow" />
                <i className="mdi mdi-movie menu-icon" />
              </a>
              <div className="collapse" id="ui-basic-2">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <NavLink className="nav-link" to="/add-movie">Thêm phim</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/list-movie">Danh sách phim</NavLink></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic-4" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Quản lý rạp chiếu</span>
                <i className="menu-arrow" />
                <i className="mdi mdi-hospital-building menu-icon" />
              </a>
              <div className="collapse" id="ui-basic-4">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <NavLink className="nav-link" to="/list-cinema">Thông tin hệ thống rạp</NavLink></li>
                  {/* <li className="nav-item"> <NavLink className="nav-link" to="/">Thông tin hệ thống cụm rạp</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/">Thông tin lịch chiếu hệ thống rạp</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/">Thông tin lịch chiếu phim</NavLink></li> */}
                </ul>
              </div>
            </li>

          </ul>
        </nav>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.authReducer.data
  }
}

export default connect(mapStateToProps)(Sidebar);
