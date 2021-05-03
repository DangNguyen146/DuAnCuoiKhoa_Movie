import React, { Component } from "react";
import { fetchAddUserApi } from "./modules/action";
import { connect } from "react-redux";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
    };
  }

  hanldeOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    this.props.fectchAddUser(this.state);
  };

  render() {
    return (
     
      <div className="container" >
        <h2 style={{ textAlign: 'center' }}>Thêm người dùng</h2>
        <div className="row p-5" style={{ justifyContent: 'center' }}>
          <div className="col-sm-7" style={{ border: '1px solid black' }}>
            <form onSubmit={this.addUser} style={{ padding: 10 }}>
              <div className="form-group">
                <label htmlFor="fullName">Họ tên</label>
                <input type="text" className="form-control" id="fullName"
                  name="hoTen"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Tài khoản</label>
                <input type="text" className="form-control" id="fullName"
                  name="taiKhoan"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Mật khẩu</label>
                <input type="text" className="form-control" id="fullName"
                  name="matKhau"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Email</label>
                <input type="email" className="form-control" id="fullName"
                  name="email"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Số điện thoại</label>
                <input type="text" className="form-control" id="fullName"
                  name="soDt"
                  onChange={this.hanldeOnchange}
                />
              </div>
          
              <div className="form-group">
                <label htmlFor="fullName">Loại người dùng</label>
                <select id="inputState" className="form-control" name="maLoaiNguoiDung"
                  onChange={this.hanldeOnchange}>
                  <option selected>QuanTri</option>
                  <option selected>KhachHang</option>
                
                </select>
              </div>
              <div className="form-group">
                <div className="col">
                  <button type="submit" className="btn btn-primary btn-block">Thêm người dùng</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fectchAddUser: (user) => {
      dispatch(fetchAddUserApi(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
