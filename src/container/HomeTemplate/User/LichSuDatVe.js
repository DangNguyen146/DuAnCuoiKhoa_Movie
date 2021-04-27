import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { actDanhSachApi } from "./Modules/action";

class LichSuDatVe extends Component {
  componentDidMount() {
    const { taiKhoan } = this.props;
    this.props.fetchdanhsach(taiKhoan);
  }

  renerSercond = (object) => {
    return object.map((item) => {
      return (
        <div className="col-8 col-md-10">
          <h6 className=" mb-1">{item.tenHeThongRap}</h6>
          <p className="text-dark mb-1" style={{ opacity: "0.7" }}>
            {item.tenCumRap}
          </p>
        </div>
      );
    });
  };
  renderHtml = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data &&
      data.thongTinDatVe.map((item) => {
        return (
          <>
            <div className="col-12">
              <div className="row">
                <div className="col-4 col-md-3 col-lg-2">
                  <div
                    className="bg-dark w-100"
                    style={{ height: "7rem" }}
                  ></div>
                </div>
                <div className="col-8 col-md-9 col-lg-10">
                  <div className="row d-none d-md-block">
                    <div className="col-4 col-md-2">
                      <div className="bg-dark w-100 h-100"></div>
                    </div>
                    {this.renerSercond(item.danhSachGhe)}
                  </div>
                  <p className="mb-3">Ngày đặt: {item.ngayDat}</p>
                  <p className="font-weight-bold text-redorange">
                    Tên phim: {item.tenPhim}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })
    );
  };
  render() {
    return (
      <div className="container mt-3 mb-5">
        <div className="row">{this.renderHtml()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.HistoryReducer.loading,
    data: state.HistoryReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchdanhsach: (taiKhoan) => {
      dispatch(actDanhSachApi(taiKhoan));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LichSuDatVe);
