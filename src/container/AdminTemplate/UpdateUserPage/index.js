import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchListUserApi } from '../ListUserPage/modules/action';
import { fetchUpdateUserApi } from './modules/action';

import "./../../../assets/styles/adminAssets/js/add-user.js";

class UpdateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: this.props.userUpdate.taiKhoan,
            matKhau: this.props.userUpdate.matKhau,
            email: this.props.userUpdate.email,
            soDt: this.props.userUpdate.soDt,
            maNhom: "GP01",
            maLoaiNguoiDung: this.props.userUpdate.maLoaiNguoiDung,
            hoTen: this.props.userUpdate.hoTen,
        };
    }


    hanldeOnchange = (e) => {
        const { name, value } = e.target;
        this.setState({
            // taiKhoan: taiKhoan,
            [name]: value,
        }, () => {
            console.log("handOnChange update user page: ", this.state);
        });
    };

    updateUser = (e) => {

        const listUserFromLocal = localStorage.getItem("ListUser");
        const { currentPage } = JSON.parse(listUserFromLocal);
        const { err } = this.props;
        e.preventDefault();
        console.log("this.state.userUpdate: ", this.state)
        this.props.fectUpdateUser(this.state);

        if (!err) {
            this.props.fetchListUser(currentPage);

        };
    }

    render() {
        const { userUpdate } = this.props;
        return (
            <div className="container" >
                <h2 style={{ textAlign: 'center' }}>Cập nhật thông tin</h2>
                <div className="row p-5" style={{ border: '1px solid black' }}>
                    <div className="col-sm-5" style={{ textAlign: 'center' }}>
                        <img src={process.env.PUBLIC_URL + '/img/user.png'} alt="" style={{ width: 250, height: 250 }} />
                        <div >
                            <span>
                                <b> {userUpdate.hoTen}</b>
                            </span>
                            <br></br>
                            <span>
                                {userUpdate.maLoaiNguoiDung==='QuanTri' ? "Quản Trị Viên" : "Khách Hàng"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <form onSubmit={this.updateUser}>
                            <div className="form-group">
                                <label htmlFor="fullName">Tài khoản</label>
                                <input type="text" className="form-control" id="fullName" defaultValue={userUpdate.taiKhoan}
                                 name="taiKhoan"
                                 onChange={this.hanldeOnchange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullName">Họ tên</label>
                                <input type="text" className="form-control" id="fullName"  defaultValue={userUpdate.hoTen}
                                 name="hoTen"
                                 onChange={this.hanldeOnchange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass">Mật khẩu</label>
                                <input type="password" className="form-control" id="pass"  defaultValue={userUpdate.matKhau}  
                                name="matKhau"
                         onChange={this.hanldeOnchange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email"  defaultValue={userUpdate.email}
                                 name="email"
                                 onChange={this.hanldeOnchange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullName">Số điện thoại</label>
                                <input type="text" className="form-control" id="fullName"  defaultValue={userUpdate.soDt}
                                 name="soDt"
                                 onChange={this.hanldeOnchange}/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="fullName">Loại người dùng</label>
                                <input type="text" className="form-control" id="fullName"  defaultValue={userUpdate.maLoaiNguoiDung}
                                 name="maLoaiNguoiDung"
                                 onChange={this.hanldeOnchange}/>
                            </div>
                            <div className="form-group">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                                </div>
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
        err: state.updateUserReducer.err,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fectUpdateUser: (user) => {
            dispatch(fetchUpdateUserApi(user));
        },
        fetchListUser: (pageNumber) => {
            dispatch(fetchListUserApi(pageNumber));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);