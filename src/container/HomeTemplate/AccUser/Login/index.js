import React, { Component } from "react";
import { fetchLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../../components/Loader";
import { Redirect } from "react-router";

class Login extends Component {
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
      return <div className="alert alert-danger p-2">{err.response.data}</div>;
  };
  renderLoding = () => {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <input type="submit" defaultValue="Đăng nhập" className="btn solid" />
    );
  };
  render() {
    return (
      <form onSubmit={this.handleLogin} action="#" className="sign-in-form">
        <h2 className="title">Đăng nhập</h2>
        <div className="input-field">
          <i className="fas fa-user " />
          <input
            name="taiKhoan"
            type="text"
            placeholder="Tên đăng nhập"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            name="matKhau"
            type="password"
            placeholder="Mật khẩu"
            onChange={this.handleOnChange}
          />
        </div>
        {this.renderNoti()}
        {this.renderLoding()}
        <p className="social-text">Đăng nhập bằng tài khoản</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.userLoginReducer.loading,
    err: state.userLoginReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, histoty) => {
      dispatch(fetchLoginApi(user, histoty));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
