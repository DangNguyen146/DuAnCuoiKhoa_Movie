import React, { Component } from "react";
// import "./BookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import { actListMovieApi } from "./Modules2/action";
import { lichChieu } from "./Modules2/Url";
// import danhSachGhe from "./danhSachGhe.json";
import HangGhe from "./HangGhe";
import { Fragment } from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { Redirect } from "react-router";
// import "./mainTicket.css";

class BookingTicket extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchMovieDetail(id);
  }
  render() {
    const Completionist = () => {
      <span>Hết thời gian chờ</span>;
    };

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        alert("Hết thời gian đợi");
        window.location.reload();
      } else {
        // Render a countdown
        return (
          <span>
            {zeroPad(minutes)}:{zeroPad(seconds)}
          </span>
        );
      }
    };
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    if (localStorage.getItem("userKH") !== null)
      return (
        data && (
          <section className="getTicket">
            <div className="container-fluit">
              <div className="row m-0 p-0">
                <div className="col-12 col-md-9 getTicket-main">
                  <div className="row">
                    <div className="d-none d-md-block col-1 p-0 Img-getTicket">
                      <div className="anh-getTicket">
                        <img
                          src={data.thongTinPhim.hinhAnh}
                          className="w-100 h-100"
                          alt=""
                        />
                      </div>
                      <div className="color-overplay" />
                    </div>
                    <div className="col-12 col-md-11">
                      <div className="getTicket-Header">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <p className="p-0 mb-1 mt-1 text-redorange">
                              {data.thongTinPhim.tenCumRap}
                            </p>
                            <p className="p-0 mb-1 mt-1 text-warning">
                              {data.thongTinPhim.diaChi}
                            </p>
                            <span className="p-0 mb-1">
                              {data.thongTinPhim.gioChieu} -{" "}
                              {data.thongTinPhim.ngayChieu}
                            </span>
                          </div>
                          <div className="d-none d-md-block col-md-7" />
                          <div className="col-12 col-md-2 text-center">
                            <p className="p-0 mb-1 mt-1">Thời gian giữ ghế</p>
                            <h3 className="bold text-redorange font-weight-bold">
                              <Countdown
                                date={Date.now() + 300000}
                                renderer={renderer}
                              />
                            </h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1" />
                          <div className="col-10 mt-4">
                            <div className="screen-getTicket"></div>
                          </div>
                          <div className="col-1" />
                        </div>

                        <div
                          className="row"
                          style={{ overflow: "auto", height: "400px" }}
                        >
                          <div className="center col-12 text-center">
                            <div
                              className="theatre mt-5 w-100"
                              style={{
                                height: 200,
                                left: 25,
                              }}
                            >
                              {/* <HangGhe danhSachGhe={danhSachGhe} /> */}
                              <HangGhe danhSachGhe={data.danhSachGhe} />
                            </div>
                          </div>
                          <div className="clear"></div>
                        </div>
                        <div className="mt-5">
                          <div className="mb-2 pb-3">
                            <button className="seat gheDuocChon"></button>
                            <span className="ml-2" style={{ fontSize: "24px" }}>
                              Ghế đã được đặt
                            </span>
                          </div>
                          <div className="mb-2 pb-3">
                            <button className="seat cssGheDangDat"></button>
                            <span className="ml-2" style={{ fontSize: "24px" }}>
                              Ghế đang chọn
                            </span>
                          </div>
                          <div className="mb-2 pb-3">
                            <button className="seat"></button>{" "}
                            <span className="" style={{ fontSize: "24px" }}>
                              Ghế chưa đặt
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 pt-2 getMobeyTicket">
                  <div className="imgMovie text-center">
                    <img src={data.thongTinPhim.hinhAnh} width="50%" alt="" />
                    <h4>{data.thongTinPhim.tenPhim}</h4>
                  </div>
                  <ThongTinDatGhe key={1} thongTinPhim={data.thongTinPhim} />
                </div>
              </div>
            </div>
          </section>
        )
      );
    else {
      localStorage.setItem(
        "idDatVe",
        JSON.stringify(this.props.match.params.id)
      );
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.lichChieuReducer.loading,
    data: state.lichChieuReducer.data,
    userLoginReducer: state.userLoginReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail: (id) => {
      dispatch(actListMovieApi(lichChieu, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket);
