import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "./Modules/constant";
import { huyGeAction } from "./Modules/action";
import { actDatVeApi } from "./moduls/aciton";
import "./mainTicket.css";
import { Button } from "@material-ui/core";
import Loader from "../../../components/Loader";
import "./getMoney.css";

class ThongTinDatGhe extends Component {
  componentDidMount() {}
  render() {
    const { thongTinPhim } = this.props;
    let temp = {
      maLichChieu: thongTinPhim.maLichChieu,
      danhSachVe: [],
      taiKhoanNguoiDung: this.props.userLoginReducer.taiKhoan,
    };
    const handleOnClick = () => {
      if (temp.danhSachVe == null) alert("Chưa đạt vé");
      else {
        this.props.fetchCreate(temp, this.props.userLoginReducer.accessToken);
      }
    };
    const buttonDatVe = () => {
      const { loading } = this.props.DatVeReducer;
      if (loading) return <Loader />;
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
        <div className="getMoney w-100 pb-5">
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
          {buttonDatVe}
        </div>
      </>
    );
  }
}
//kết nối reducer
const mapStateToProps = (state) => {
  return {
    dangSachGheDangDat: state.DatVeReducer.dangSachGheDangDat,
    userLoginReducer: state.userLoginReducer.data,
    DatVeReducer: state.DatVeReducer.loading,
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
