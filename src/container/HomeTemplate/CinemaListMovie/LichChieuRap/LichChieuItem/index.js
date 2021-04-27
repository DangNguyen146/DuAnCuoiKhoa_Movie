import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link, NavLink } from "react-router-dom";

export default class LichChieuItem extends Component {
  componentDidMount() {
    const { danhSachPhim } = this.props;
  }
  render() {
    const returnTimeMovie = (lstLichChieuTheoPhim, maPhim) => {
      return lstLichChieuTheoPhim.map((item) => {
        return (
          <div className="col-3 mb-1">
            <Link
              to={`/datve/${item.maLichChieu}`}
              className="text-decoration-none"
            >
              <Button variant="outlined" color="secondary" className=" w-100 ">
                <span className="text-decoration-none">
                  {item.ngayChieuGioChieu.slice(11, 16)}
                </span>
              </Button>
            </Link>
          </div>
        );
      });
    };

    const renderHTML = () => {
      return this.props.danhSachPhim.map((item) => {
        return (
          <div>
            <div className="row mb-3">
              <div className="col-3">
                <Link
                  to={`/detail/${item.maPhim}`}
                  className="shadow-sm text-decoration-none"
                >
                  <img
                    src={item.hinhAnh}
                    style={{ height: "100px", width: "50px" }}
                    className="w-100"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-9">
                <p className="text-redorange mb-1">
                  <Link
                    to={`/detail/${item.maPhim}`}
                    className="shadow-none border-0 text-redorange text-decoration-none"
                  >
                    <b>{item.tenPhim}</b>
                  </Link>
                </p>
                <p className="text-dark">Mã phim: {item.maPhim}</p>
              </div>
              <div className="col-12">
                <div className="row">
                  <div
                    className="col-3 text-center"
                    style={{ fontSize: "24px" }}
                  >
                    2D Digital
                  </div>
                  <div className="col-9">
                    <div className="row">
                      {returnTimeMovie(item.lstLichChieuTheoPhim, item.maPhim)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ height: "2px" }} />
          </div>
        );
      });
    };
    return <div className="container-fluid">{renderHTML()}</div>;
  }
}
