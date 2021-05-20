import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { fetchUpdateApi } from "./Modules/action";
import { Route } from "react-router";
import { Link, NavLink } from "react-router-dom";

class ThongTinCaNhan extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      taiKhoan: "",
      matKhau: "",
      email: data.email,
      soDt: data.soDT,
      maNhom: "GP10",
      maLoaiNguoiDung: "KhachHang",
      hoTen: data.hoTen,
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleUpdate = (e) => {
    e.preventDefault();
    const { data, history } = this.props;
    if (this.state.taiKhoan === "" || this.state.matKhau === "") {
      alert("Nhập tên đăng nhập/ mật khẩu");
    } else {
      localStorage.removeItem("idDatVe");
      this.props.fetchUpdate(this.state, data.accessToken);
    }
  };
  render() {
    const refreshPage = () => {
      window.location.reload(false);
    };
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data && (
        <div className="container mt-3 mb-5">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <TextField
                type="email"
                name="email"
                label="Email"
                color="secondary"
                className="w-100"
                defaultValue={data.email}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <TextField
                type="text"
                name="taiKhoan"
                label="Tài khoản"
                color="secondary"
                className="w-100"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <TextField
                type="text"
                name="hoTen"
                label="Họ tên"
                color="secondary"
                className="w-100"
                defaultValue={data.hoTen}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-12 col-md-6 mb-3" type="password">
              <TextField
                name="matKhau"
                label="Mật khẩu"
                color="secondary"
                className="w-100"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <TextField
                type="phone"
                name="soDt"
                label="Số điện thoại"
                color="secondary"
                className="w-100"
                type="passwork"
                defaultValue={data.soDT}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              className="btn btn-redorange px-3"
              onClick={this.handleUpdate}
            >
              Cập nhật thông tin
            </Button>
          </div>
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.userLoginReducer.loading,
    data: state.userLoginReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdate: (user, token) => {
      dispatch(fetchUpdateApi(user, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinCaNhan);
