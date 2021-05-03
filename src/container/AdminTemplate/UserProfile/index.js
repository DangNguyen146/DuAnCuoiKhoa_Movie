import React, { Component } from 'react'
import { connect } from 'react-redux'
class UserProfilePage extends Component {
    render() {

        return (
            <>
                <div className="container" >
                    <h2>Thông tin cá nhân</h2>
                    <div className="row p-5" style={{ border: '1px solid black' }}>
                        <div className="col-sm-5" style={{ textAlign: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/img/user.png'} alt="" style={{ width: 250, height: 250 }} />
                            <div >
                                {this.props.userData ?
                                    <span>
                                        <b> {this.props.userData.hoTen}</b>
                                    </span>
                                    : <>
                                        <span></span>
                                    </>}
                                <br></br>
                                {this.props.userData ?
                                    <span>
                                        {this.props.userData.maLoaiNguoiDung ? "Quản trị viên" : ""}
                                    </span>
                                    : <>
                                        <span></span>
                                    </>}
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <form >
                                {this.props.userData ?
                                    <div className="form-group">
                                        <label htmlFor="fullName">Tài khoản</label>
                                        <input type="text" className="form-control" id="fullName" defaultValue={this.props.userData.taiKhoan} readOnly />
                                    </div>
                                    : <>
                                        <div></div>
                                    </>}
                                {this.props.userData ?
                                    <div className="form-group">
                                        <label htmlFor="fullName">Họ tên</label>
                                        <input type="text" className="form-control" id="fullName" defaultValue={this.props.userData.hoTen} readOnly />
                                    </div>
                                    : <>
                                        <div></div>
                                    </>}

                                {this.props.userData ?
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" defaultValue={this.props.userData.email} readOnly />
                                    </div>
                                    : <>
                                        <div></div>
                                    </>}
                                {this.props.userData ?
                                    <div className="form-group">
                                        <label htmlFor="fullName">Số điện thoại</label>
                                        <input type="text" className="form-control" id="fullName" defaultValue={this.props.userData.soDT} readOnly />
                                    </div>
                                    : <>
                                        <div></div>
                                    </>}
                                {this.props.userData ?
                                    <div className="form-group">
                                        <label htmlFor="fullName">Loại người dùng</label>
                                        <input type="text" className="form-control" id="fullName" defaultValue={this.props.userData.maLoaiNguoiDung ? "Quản trị viên" : ""} readOnly />
                                    </div>
                                    : <>
                                        <div></div>
                                    </>}
                            </form>
                        </div>
                    </div>
                </div>
            </>


        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer.data
    }
}



export default connect(mapStateToProps, null)(UserProfilePage);