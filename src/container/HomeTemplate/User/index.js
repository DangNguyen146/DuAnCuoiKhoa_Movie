import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import LichSuDatVe from "./LichSuDatVe";
import ThongTinCaNhan from "./ThongTinCaNhan";
import { fetchUpdateApi } from "./Modules/action";

class User extends Component {
  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data && (
        <div className="profile mt-3">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-md-4 shadow avatar-proflie rounded"
                style={{ height: 358 }}
              >
                <div className="logo center text-center mt-4">
                  <h1>{data.hoTen.slice(0, 1)}</h1>
                </div>
                <h5 className="text-redorange font-weight-bolder text-center mt-2">
                  {data.taiKhoan}
                </h5>
                <hr />
                <div className="item-profile container pb-5">
                  <div className="row">
                    <div className="col-3 font-weight-bold">Tên</div>
                    <div className="col-9">{data.hoTen}</div>
                    <div className="col-3 font-weight-bold">Sđt</div>
                    <div className="col-9">{data.soDT}</div>
                    <div className="col-3 font-weight-bold">Email</div>
                    <div className="col-9">{data.email}</div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-8  rounded shadow-sm profile-item2"
                style={{ minHeight: 358 }}
              >
                <div className="container  mt-4">
                  <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active "
                          id="user-tab"
                          data-toggle="tab"
                          href="#user"
                          role="tab"
                          aria-controls="user"
                          aria-selected="true"
                        >
                          Thông tin cá nhân
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link "
                          id="history-tab"
                          data-toggle="tab"
                          href="#history"
                          role="tab"
                          aria-controls="history"
                          aria-selected="false"
                        >
                          Lịch sử đặt vé
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="user"
                        role="tabpanel"
                        aria-labelledby="user-tab"
                      >
                        <ThongTinCaNhan />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="history"
                        role="tabpanel"
                        aria-labelledby="history-tab"
                      >
                        <LichSuDatVe key={1} taiKhoan={data.taiKhoan} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps)(User);
