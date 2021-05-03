import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDeleteUserApi } from '../DeleteUserPage/modules/action';
import { fetchListUserApi } from '../ListUserPage/modules/action';

class SearchUser extends Component {

    deleteUser(account) {
        const listUserFromLocal = localStorage.getItem("ListUser");
        const { currentPage } = JSON.parse(listUserFromLocal);
          this.props.fectDeleteUser(account);
          this.props.fetchListUser(currentPage);
      
      }
    render() {
        const { userSearch } = this.props;

        return (
            <tr key={userSearch.taiKhoan}>
                <td>{userSearch.hoTen}</td>
                <td>{userSearch.taiKhoan}</td>
                {/* <td>{user.matKhau}</td> */}
                <td>{userSearch.email}</td>
                <td>{userSearch.soDt}</td>
                <td>{userSearch.maLoaiNguoiDung === 'QuanTri' ? "Quản Trị Viên" : "Khách Hàng"}</td>
                <td>
                    <a type="button" className="settings" title="Xem chi tiết" data-toggle="modal" data-target="#editProfile" onClick={() => { this.props.getUserAccount(userSearch) }}><i className="mdi mdi-pencil"></i></a>
                    {/* <a type="button" className="settings" title="Cập nhật phim" data-toggle="tooltip"><i className="mdi mdi-settings"></i></a> */}
                    <a type="button" className="delete" title="Xóa" data-toggle="modal" data-target="#staticBackdrop" onClick={() => { this.deleteUser(userSearch.taiKhoan) }} ><i className="mdi mdi-delete"></i></a>
                </td>
            </tr>
        )
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


export default connect(mapStateToProps, mapDispatchToProps) (SearchUser);
