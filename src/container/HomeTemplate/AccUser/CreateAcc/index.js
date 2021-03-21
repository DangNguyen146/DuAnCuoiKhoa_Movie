import React, { Component } from "react";
import Loader from "../../../../components/Loader";
import { fetchCreateApi } from "./modules/action";
import { connect } from "react-redux";

class CreateAcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP10",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
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
    this.props.fetchCreate(this.state, this.props.history);
  };
  handleOnKeyUp = (e) => {
    const { name, value } = e.target;
    if (this.state.matKhau.indexOf(value) !== -1) {
      document.getElementById("checkMK").style.display = "none";
      document.getElementById("checkMK").innerHTML = "";
    } else {
      document.getElementById("checkMK").style.display = "block";
      document.getElementById("checkMK").innerHTML =
        "Sai mật khẩu. Vui lòng nhập lại";
    }
  };
  renderNoti = () => {
    const { err } = this.props;
    if (err)
      return <div className="alert alert-danger px-4">{err.response.data}</div>;
  };
  renderLoding = () => {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return <input type="submit" className="btn" defaultValue="Sign up" />;
  };
  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <form action="#" className="sign-up-form" onSubmit={this.handleLogin}>
        <h2 className="title">Đăng kí</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            name="hoTen"
            placeholder="Họ và tên"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            name="taiKhoan"
            placeholder="Tên đăng nhập"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            name="matKhau"
            placeholder="Mật khẩu"
            onChange={this.handleOnChange}
          />
        </div>

        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            name="CheckmatKhau"
            placeholder="Nhập lại mật khẩu"
            onKeyUp={this.handleOnKeyUp}
          />
        </div>
        <span className="text-danger text-left px-3" id="checkMK"></span>
        <div className="input-field">
          <i className="fas fa-phone" />
          <input
            type="phone"
            onChange={this.handleOnChange}
            name="soDt"
            placeholder="Số điện thoại"
          />
        </div>
        {this.renderNoti()}
        {this.renderLoding()}
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.userCreateReducer.loading,
    err: state.userCreateReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCreate: (user, histoty) => {
      dispatch(fetchCreateApi(user, histoty));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateAcc);
