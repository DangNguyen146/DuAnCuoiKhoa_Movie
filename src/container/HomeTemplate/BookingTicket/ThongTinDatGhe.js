import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "./Modules/constant";
import { huyGeAction } from "./Modules/action";
import "./mainTicket.css";

class ThongTinDatGhe extends Component {
  render() {
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
          {/* <table className="table" border="2">
            <thead>
              <tr className="">
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning  ">
              {this.props.dangSachGheDangDat.map((gheDangDat, index) => {
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
          </table> */}
          {/* <hr className="mt-0 pt-0" /> */}
        </div>
        <h4 className="text-redorange text-center">Tổng số tiền</h4>
        <h2 className="text-redorange text-center font-weight-bold">
          {this.props.dangSachGheDangDat
            .reduce((tongTien, gheDangDat, index) => {
              return (tongTien += gheDangDat.giaVe);
            }, 0)
            .toLocaleString()}
        </h2>
        <button className="btn btn-redorange w-100">Đặt vé</button>
      </>
    );
  }
}
//kết nối reducer
const mapStateToProps = (state) => {
  return {
    dangSachGheDangDat: state.DatVeReducer.dangSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
