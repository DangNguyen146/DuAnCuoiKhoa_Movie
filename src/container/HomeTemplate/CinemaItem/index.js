import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { connect, shallowEqual, useSelector, useDispatch } from "react-redux";
import { Route, useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Loader from "../../../components/Loader";

import { actTTLCRApi } from "../CinemaListMovie/modules/action";
import { LayThongTinLichChieuHeThongRap } from "../CinemaListMovie/modules/url";
import "./index.css";

export default function CinemaItem() {
  const [count, setCount] = useState(0);
  const { name, id } = useParams();
  const { loading, data } = useSelector((state) => state.ttlcrCinemaReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTTLCRApi(LayThongTinLichChieuHeThongRap, name, "&maNhom=GP10"));
  }, []);
  const renderLogo = () => {
    if (loading) return <Loader />;
    return (
      data &&
      data[0].lstCumRap.map((item, i) => {
        if (item.maCumRap !== id) {
          return (
            <div style={{ opacity: "0.7" }}>
              {/* {item.maCumRap === id ? <div style={{ opacity: "0.7" }}> : <div >}</ */}
              <Link
                className="btn text-redorange btn-block  shadow-none  border-0 text-left p-0"
                // onClick={() => setCount((count = 1))}
                to={`/detailCinema/${name}/${id}`}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-3 px-1">
                      <div
                        style={{
                          height: "65px",
                          width: "65px",
                          backgroundColor: "#555",
                        }}
                      ></div>
                    </div>
                    <div className="col-9">
                      <p style={{ margin: "0" }}>
                        <b>{item.tenCumRap}</b>
                      </p>
                      <p style={{ margin: "0", lineHeight: "13px" }}>
                        <i style={{ fontSize: "10px" }}>{item.diaChi}</i>
                      </p>
                      <p style={{ margin: "0", fontSize: "12px" }}>
                        [Chi tiết]
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <hr style={{ height: "5px" }} />
            </div>
          );
        } else {
          return (
            <div>
              <Link
                className="btn text-redorange btn-block  shadow-none  border-0 text-left p-0"
                to={`/detailCinema/${name}/${id}`}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-3 px-1">
                      <div
                        style={{
                          height: "65px",
                          width: "65px",
                          backgroundColor: "#555",
                        }}
                      ></div>
                    </div>
                    <div className="col-9">
                      <p style={{ margin: "0" }}>
                        <b>{item.tenCumRap}</b>
                      </p>
                      <p style={{ margin: "0", lineHeight: "13px" }}>
                        <i style={{ fontSize: "10px" }}>{item.diaChi}</i>
                      </p>
                      <p style={{ margin: "0", fontSize: "12px" }}>
                        [Chi tiết]
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <hr style={{ height: "5px" }} />
            </div>
          );
        }
      })
    );
  };

  let temp = "";
  const renderItemPhim = () => {
    if (loading) return <Loader />;
    return (
      data &&
      data[0].lstCumRap.map((item, i) => {
        if (item.maCumRap === id) {
          return item.danhSachPhim.map((itemDS, i) => {
            return (
              <>
                <div className="row mb-3 m-0">
                  <div className="col-3">
                    <Link
                      to={`/detail/${itemDS.maPhim}`}
                      className="shadow-sm text-decoration-none"
                    >
                      <img
                        src={itemDS.hinhAnh}
                        style={{ width: "100%" }}
                        className="w-100"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-9">
                    <p className="text-redorange mb-1">
                      <Link
                        to={`/detail/${itemDS.maPhim}`}
                        className="shadow-none border-0 text-redorange text-decoration-none"
                      >
                        <b>{itemDS.tenPhim}</b>
                      </Link>
                    </p>
                    <p className="text-dark">Mã phim: {itemDS.maPhim}</p>
                    {itemDS.lstLichChieuTheoPhim.map((itemTime) => {
                      return (
                        <>
                          {itemTime.ngayChieuGioChieu.slice(0, 10) !== temp ? (
                            <div class="pl-0 col-12 w-100 text-left ">
                              <span>
                                <span>Xuất chiều ngày </span>
                                {
                                  (temp = itemTime.ngayChieuGioChieu.slice(
                                    0,
                                    10
                                  ))
                                }
                              </span>
                            </div>
                          ) : (
                            false
                          )}
                          <Link
                            to={`/datve/${itemTime.maLichChieu}`}
                            className="text-decoration-none"
                          >
                            <Button className="col-4 col-sm-3 col-md-2 w-75 btn border btn-outline-redorange text-redorange mb-3 mr-4">
                              {itemTime.ngayChieuGioChieu.slice(12, 16)}
                            </Button>
                          </Link>
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr style={{ height: "5px" }} />
              </>
            );
          });
        }
      })
    );
  };
  const renderRapPhim = () => {
    if (loading) return <Loader />;
    return (
      data &&
      data[0].lstCumRap.map((item, i) => {
        if (item.maCumRap === id) {
          return (
            <section className="cinemaItem">
              <div className="backGround-cinemaItem" />
              <div className="overplayCinemaItem" />
              <div className="gradientMovieItem" />
              <div className="container cinemaItem-content">
                <div className="row">
                  <div className="col-12 col-md-3">
                    <div
                      className="bg-white"
                      style={{ width: "100%", height: 250 }}
                    ></div>
                  </div>
                  <div className="col-12 col-md-9 text-md-left text-center">
                    <h1 className="text-redorange bold font-weight-bold mt-3 text-center text-md-left">
                      {item.tenCumRap}
                    </h1>
                    <div className="row text-left">
                      <div className="col-4 col-md-2">Địa chỉ:</div>
                      <div className="col-8 col-md-10">{item.diaChi}</div>
                    </div>
                    <div className="row text-left">
                      <div className="col-4 col-md-2">Đánh giá:</div>
                      <div className="col-8 col-md-10">
                        <i class="fas fa-star" style={{ color: "#fb543b" }}></i>
                        <i class="fas fa-star" style={{ color: "#fb543b" }}></i>
                        <i class="fas fa-star" style={{ color: "#fb543b" }}></i>
                        <i class="fas fa-star" style={{ color: "#fb543b" }}></i>
                        <i class="fas fa-star" style={{ color: "#fb543b" }}></i>
                      </div>
                    </div>
                    <button className="btn btn-redorange mt-3 px-3">
                      Mua vé
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })
    );
  };

  return (
    <>
      <>{renderRapPhim()}</>
      <div className="container cinemaListMovie px-0">
        <div
          className="row m-0 wow animate__fadeInDown m-0"
          data-wow-delay="0.3s"
        >
          <div
            className="d-none d-md-block col-md-3 p-0 border-right"
            style={{ height: 650 }}
          >
            <div
              className="list-group rounded-0 rounded-left"
              id="list-tab"
              role="tablist"
            >
              {renderLogo()}
            </div>
          </div>
          <div className="col-12 col-md-9 p-0">
            <div className="tab-content item-DetaildPage" id="nav-tabContent">
              {renderItemPhim()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
