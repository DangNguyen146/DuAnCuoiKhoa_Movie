import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class LichChieuItem extends Component {
  componentDidMount() {
    const { danhSachPhim } = this.props;
  }
  render() {
    const returnTimeMovie = (lstLichChieuTheoPhim) => {
      return lstLichChieuTheoPhim.map((item) => {
        return (
          <div className="col-3 mb-1">
            <Button variant="outlined" color="secondary" className=" w-100">
              {item.ngayChieuGioChieu.slice(11, 16)}
            </Button>
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
                <img
                  src={item.hinhAnh}
                  style={{ height: "100px", width: "50px" }}
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-9">
                <p className="text-redorange mb-1">
                  <b>{item.tenPhim}</b>
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
                      {returnTimeMovie(item.lstLichChieuTheoPhim)}
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
