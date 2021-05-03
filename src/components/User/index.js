
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDeleteUserApi } from "../../container/AdminTemplate/DeleteUserPage/modules/action";
import { fetchListUserApi } from "../../container/AdminTemplate/ListUserPage/modules/action";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
    };
  }

  deleteUser(account) {
    const listUserFromLocal = localStorage.getItem("ListUser");
    const { currentPage } = JSON.parse(listUserFromLocal);
      this.props.fectDeleteUser(account);
      this.props.fetchListUser(currentPage);
  
  }

  renderUser = () => {
    const { user } = this.props;
    return (
      <tr key={user.taiKhoan}>
        <td>{user.hoTen}</td>
        <td>{user.taiKhoan}</td>
        {/* <td>{user.matKhau}</td> */}
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>{user.maLoaiNguoiDung==='QuanTri' ? "Quản Trị Viên" : "Khách Hàng"}</td>
        <td>
          <a type="button" className="settings" title="Xem chi tiết" data-toggle="modal" data-target="#editProfile" onClick={() => { this.props.getUserAccount(user) }}><i className="mdi mdi-pencil"></i></a>
          {/* <a type="button" className="settings" title="Cập nhật phim" data-toggle="tooltip"><i className="mdi mdi-settings"></i></a> */}
          <a type="button" className="delete" title="Xóa" data-toggle="modal" data-target="#staticBackdrop" onClick={() => { this.deleteUser(user.taiKhoan) }} ><i className="mdi mdi-delete"></i></a>
        </td>
      </tr>
    )

  }

  render() {
    return (
      <>
        {this.renderUser()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.deleteUserReducer.data,
    err: state.deleteUserReducer.err,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fectDeleteUser: (account) => {
      dispatch(fetchDeleteUserApi(account));
    },
    fetchListUser: (pageNumber) => {
      dispatch(fetchListUserApi(pageNumber));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);