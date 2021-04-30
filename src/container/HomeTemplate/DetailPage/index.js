import React, { Component } from "react";
import { actDetailMovieApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";
import { Link } from "react-router-dom";
import "./main.css";
import { Button } from "@material-ui/core";
import Footer from "../../../components/Footer";
import TimeDetaild from "./TimeDetaild";
import OpenPopupVideo from "../../../components/Slider/OpenPopupVideo";

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexCinema: "BHDStar",
    };
  }
  componentDidMount() {
    //lấy id từ url
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
  }

  renderTable = () => {
    const { data } = this.props;
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <Link className="btn btn-success" to="#phong-ve">
                Chọn ghế
              </Link>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;

    const renderLogo = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.heThongRapChieu.map((item, i) => {
          if (i === 0) {
            return (
              <a
                className="list-group-item list-group-item-action active"
                id={item.maHeThongRap}
                data-toggle="list"
                href={"#" + item.biDanh}
                role="tab"
                aria-controls="home"
                onClick={() => {
                  this.setState({
                    indexCinema: item.maHeThongRap,
                  });
                }}
              >
                <div className="row p-0">
                  <div className="col-12 col-sm-4">
                    <img src={item.logo} className="w-100" alt="" />
                  </div>
                  <div
                    className="d-none d-sm-block col-sm-8 font-weight-bold"
                    style={{ margin: "auto 0" }}
                  >
                    {item.tenHeThongRap}
                  </div>
                </div>
              </a>
            );
          } else
            return (
              <a
                className="list-group-item list-group-item-action"
                id={item.maHeThongRap}
                data-toggle="list"
                href={"#" + item.biDanh}
                role="tab"
                aria-controls="home"
                onClick={() => {
                  this.setState({
                    indexCinema: item.maHeThongRap,
                  });
                }}
              >
                <div className="row p-0">
                  <div className="col-12 col-sm-4">
                    <img src={item.logo} className="w-100" alt="" />
                  </div>
                  <div
                    className="d-none d-sm-block col-sm-8 font-weight-bold"
                    style={{ margin: "auto 0" }}
                  >
                    {item.tenHeThongRap}
                  </div>
                </div>
              </a>
            );
        })
      );
    };

    const renderItem = (maHeThongRap) => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.heThongRapChieu.map((item, i) => {
          if (maHeThongRap === item.maHeThongRap) {
            return <TimeDetaild key={i} cumRapChieu={item.cumRapChieu} />;
          }
        })
      );
    };

    return (
      <section>
        <div className="shadow-lg mb-5 movieItem py-5 rounded text-light">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div id="movieItem-title">
            <div className="container  mt-3">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 text-center movieItem-Img">
                  <img
                    className="w-100 d-none d-lg-block text-center"
                    src={data && data.hinhAnh}
                    alt=""
                  />
                  {/* <img src={data && data.hinhAnh} className="w-100" alt="" /> */}
                  <img
                    className="w-25 d-none d-sm-block d-lg-none text-center"
                    src={data && data.hinhAnh}
                    alt=""
                  />
                  <img
                    className="w-50 d-block d-sm-none text-center"
                    src={data && data.hinhAnh}
                    alt=""
                  />
                  <div className="popupVideo">
                    <OpenPopupVideo
                      id={data && data.trailer.slice(30, data.trailer.length)}
                    />
                  </div>
                </div>
                <div className="d-none d-lg-block col-lg-1" />
                <div className="col-12 col-lg-7">
                  <h3 className="text-center text-md-left">
                    {data && data.tenPhim}
                  </h3>
                  <p className="d-none d-md-block">{data && data.moTa}</p>
                  <div className="row">
                    <div className="col-4 pr-0 col-md-3">Phân loai</div>
                    <div className="col-8 col-md-8 text-danger font-weight-bolder text-uppercase">
                      C18-Phim dành cho khán giã 18 tuổi trở lên
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 pr-0 col-md-3">Diễn viên</div>
                    <div className="col-8 col-md-8">Jon Hoo Bong</div>
                  </div>
                  <div className="row">
                    <div className="col-4 pr-0 col-md-3">Thể loại</div>
                    <div className="col-8 col-md-8">Drama</div>
                  </div>
                  <div className="row">
                    <div className="col-4 pr-0 col-md-3">Khởi chiếu</div>
                    <div className="col-8 col-md-8">
                      {data && data.ngayKhoiChieu.slice(0, 10)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 pr-0 col-md-3">Thời lượng</div>
                    <div className="col-8 col-md-8">
                      {data &&
                        data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]
                          .thoiLuong}
                      <span className="ml-1">phút</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 pr-0 col-md-3">Đánh giá</div>
                    <div className="col-8 col-md-8">{data && data.danhGia}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6 col-md-3">
                      <Button type="button" className=" btn-redorange w-100">
                        <i className="fa fa-ticket-alt" />
                        <span className="ml-1"> Mua vé</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 cinemaListMovie px-0">
          <div
            className="row wow animate__fadeInDown m-0"
            data-wow-delay="0.3s"
          >
            <div className="col-3 p-0 border-right" style={{ height: 650 }}>
              <div
                className="list-group rounded-0 rounded-left"
                id="list-tab"
                role="tablist"
              >
                {renderLogo()}
              </div>
            </div>
            <div className="col-9 p-0">
              <div className="tab-content item-DetaildPage" id="nav-tabContent">
                {renderItem(this.state.indexCinema)}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actDetailMovieApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
