import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "./Modules/constant";
import { huyGeAction } from "./Modules/action";
import { actDatVeApi } from "./moduls/aciton";
import "./mainTicket.css";
import { Button } from "@material-ui/core";

class ThongTinDatGhe extends Component {
  render() {
    const { thongTinPhim } = this.props;
    let temp = {
      maLichChieu: thongTinPhim.maLichChieu,
      danhSachVe: [],
      taiKhoanNguoiDung: this.props.userLoginReducer.taiKhoan,
    };
    const handleOnClick = () => {
      console.log(this.props.userLoginReducer.accessToken);
      this.props.fetchCreate(temp, this.props.userLoginReducer.accessToken);
    };
    return (
      <>
        <div className="listGheDat ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col">Hủy</th>
              </tr>
            </thead>
            <tbody className="listGheDat">
              {this.props.dangSachGheDangDat.map((gheDangDat, index) => {
                temp.danhSachVe.push({
                  maghe: gheDangDat.maGhe,
                  giave: gheDangDat.giaVe,
                });
                return (
                  <tr key={{ index }}>
                    <td>{gheDangDat.maGhe}</td>
                    <td>{gheDangDat.giaVe.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-outline-redorange"
                        onClick={() => {
                          this.props.dispatch(huyGeAction(gheDangDat.maGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h4 className="text-redorange text-center">Tổng số tiền</h4>
        <h2 className="text-redorange text-center font-weight-bold">
          {this.props.dangSachGheDangDat
            .reduce((tongTien, gheDangDat, index) => {
              return (tongTien += gheDangDat.giaVe);
            }, 0)
            .toLocaleString()}
        </h2>
        <Button className="btn btn-redorange w-100" onClick={handleOnClick}>
          Đặt vé
        </Button>
      </>
    );
  }
}
//kết nối reducer
const mapStateToProps = (state) => {
  return {
    dangSachGheDangDat: state.DatVeReducer.dangSachGheDangDat,
    userLoginReducer: state.userLoginReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCreate: (object, token) => {
      dispatch(actDatVeApi(object, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
