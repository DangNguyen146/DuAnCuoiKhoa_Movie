import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import Loader from "./../../../components/Loader";
import { fetchListUserApi } from './modules/action';
import User from "./../../../components/User";
import { NavLink } from 'react-router-dom';
import ReactPagination from '../../../components/Pagination';
import { fetchDeleteUserApi } from '../DeleteUserPage/modules/action';

import UpdateUser from '../UpdateUserPage';

// import { useSelector, useDispatch } from 'react-redux';
// const error = useSelector(state => state.errorReducer.error);

class listUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "",
            totalPages: "",
            count: "",
            items: "",
            totalCount: "",
            userInfo: "",
            userUpdate: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDt: "",
                maNhom: "",
                maLoaiNguoiDung: "",
            },
        };
    }


    componentDidMount() {
        const listUserFromLocal = localStorage.getItem("ListUser");
        const { currentPage, totalPages, count, items, totalCount } = JSON.parse(listUserFromLocal);
        this.props.fetchListUser(1); // Get the project when Component gets Mounted
        this.setState({
            currentPage,
            totalPages,
            count,
            items,
            totalCount,
        }, () => {
            console.log(this.state.currentPage, this.state.totalPages, this.state.count, this.state.items);
        });

    }

    renderPagination = () => {
        return (
            <div style={{ float: 'right' }}>
                <div className="container">
                    <ReactPagination
                        currentPage={this.state.currentPage}
                        totalPages={this.state.totalPages}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="square-fill"
                    />
                </div>
            </div>
        )
    }

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage },
            () => {
                this.props.fetchListUser(numPage);
            });
    };


    getUserAccount = (userAccount) => {
        // console.log("userInfor form edit: ", userAccount);
        const { taiKhoan, hoTen, email, matKhau, maLoaiNguoiDung, soDt, maNhom } = userAccount;

        this.setState({
            userInfo: userAccount,
            userUpdate: {
                taiKhoan,
                hoTen,
                email,
                matKhau,
                maLoaiNguoiDung,
                soDt,
                maNhom,
            },

        }, () => {
            console.log("userUpdate form edit : ", this.state.userUpdate);
        });
    }

    renderModalUpdate = () => {
        let { userUpdate } = this.state;
        return <UpdateUser key={userUpdate.taiKhoan} userUpdate={userUpdate} />;
    }


    renderNoti = () => {
        const { err } = this.props;
        if (err) {
            // console.log("err cmm roi: ", err.response.data);
            // return <div className="alert alert-danger">{err.response.data}!</div>;
            return (
                <div id="card" className="animated fadeIn">

                    <div id="lower-side"  >
                        <p id="message" className="alert alert-danger">
                            {err.response.data}
                        </p>
                        <a href="#" id="contBtn">Đồng ý</a>
                    </div>
                </div>
            )
        } else {

            return (
                <div id="card" className="animated fadeIn">

                    <div id="lower-side" >
                        <p id="message" className="alert alert-success">
                            Xóa thành công
                        </p>
                        <a href="#" id="contBtn">Đồng ý</a>
                    </div>
                </div>
            )
        }
    };

    renderNotiUpdate = () => {
        const { updateErr } = this.props;
        if (updateErr) {
            return <div className="alert alert-danger">{updateErr.response.data}</div>;
        } 
    };


    renderHTML = () => {
        const { loading, data } = this.props;

        if (loading) return <Loader />;
        return (
            data &&
            data.items.map((item) => {
                return <User key={item.taiKhoan} user={item} getUserAccount={this.getUserAccount} />;
            })
        );
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="col-sm-5">
                        <h2>Quản lý tài khoản</h2>
                    </div>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="input-group rounded">
                                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                            <span className="input-group-text border-0" id="search-addon">
                                                <i className="mdi mdi-magnify" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <NavLink to="/add-user" className="btn btn-success"><i className="material-icons"></i> <span>Thêm nguười dùng</span></NavLink>
                                        {/* <NavLink to="/add-movie" className="btn btn-secondary"><i className="material-icons"></i> <span>Thêm phim mới</span></NavLink> */}
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Họ Tên</th>
                                        <th>Tài khoản</th>
                                        {/* <th>Mật khẩu</th> */}
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Loại người dùng</th>
                                        <th>Tác vụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderHTML()}
                                </tbody>
                            </table>
                            <div className="clearfix">
                                <div className="hint-text">Showing <b>{this.state.count}</b> out of <b>{this.state.totalCount}</b> entries</div>
                                {this.renderPagination()}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal fade" id="editProfile" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                              
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.renderNotiUpdate()}
                                {this.renderModalUpdate()}
                            </div>
                        </div>
                    </div>
                </div >

                {/* modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        {/* <div className="modal-content"> */}
                        <section>
                            <div className="rt-container">
                                <div className="col-rt-12">
                                    <div className="Scriptcontent">
                                        {/* partial:index.partial.html */}
                                        {this.renderNoti()}
                                      

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listUserReducer.loading,
        data: state.listUserReducer.data,
        err: state.deleteUserReducer.err,
        updateErr: state.updateUserReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListUser: (pageNumber) => {
            dispatch(fetchListUserApi(pageNumber));
        },
        fectDeleteUser: (account) => {
            dispatch(fetchDeleteUserApi(account));
        },
        // fectUpdateUser: (user) => {
        //     dispatch(fetchUpdateUserApi(user));
        // }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(listUserPage);
