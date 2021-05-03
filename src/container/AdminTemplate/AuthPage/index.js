import React, { Component } from "react";
import { fetchLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";
import { fetchListUserApi } from "../ListUserPage/modules/action";

 import  "./../../../assets/styles/adminAssets/css/main.css";
// import  "./../../../assets/styles/adminAssets/css/util.css";
// import  "./../../../assets/styles/adminAssets/css/style.css";
// import  "./../../../assets/styles/adminAssets/css/movie-style.css";
// import  "./../../../assets/styles/adminAssets/css/modal.css";
// import  "./../../../assets/styles/adminAssets/css/userProfile.css";
// import  "./../../../assets/styles/adminAssets/css/paper-dashboard.css";
// import  "./../../../assets/styles/adminAssets/vendors/css/vendor.bundle.base.css";
// import  "./../../../assets/styles/adminAssets/vendors/mdi/css/materialdesignicons.min.css";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };

  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.fetchLogin(this.state, this.props.history);
  };

  renderNoti = () => {
    const { err } = this.props;
    if (err)
      return <div className="alert alert-danger">{err.response.data}</div>;
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={process.env.PUBLIC_URL + '/img/admin.png'} alt="IMG" />
            </div>
            <form className="login100-form validate-form" onSubmit={this.handleLogin}>

              <span className="login100-form-title">
                Dashboard
        </span>
              {this.renderNoti()}
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" placeholder="username" name="taiKhoan"
                  onChange={this.handleOnChange} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" placeholder="Password" name="matKhau"
                  onChange={this.handleOnChange} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Login
          </button>
              </div>
              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Back to home
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    err: state.authReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, histoty) => {
      dispatch(fetchLoginApi(user, histoty));
    },
    fetchListUser: (pageNumber) => {
      dispatch(fetchListUserApi(pageNumber));
  }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
