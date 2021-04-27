import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { DatGeAction } from "./Modules/action";
import "./seat.css";

class HangGhe extends Component {
  componentDidMount() {}
  renderGhe = (object) => {
    return object.map((ghe, index) => {
      let cssGheDatDat = "";
      let disabled = false;
      //trạng thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDatDat = "gheDuocChon";
        disabled = true;
      }
      //xét trạng thái đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.dangSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (indexGheDangDat !== -1) cssGheDangDat = "cssGheDangDat";

      return (
        <div
          onClick={() => {
            if (disabled !== true) this.props.datGhe(ghe);
          }}
          className={`seat ${cssGheDatDat} ${cssGheDangDat}`}
          key={{ index }}
          disabled={disabled}
        ></div>
      );
    });
  };
  renderHangGhe = (object) => {
    var i = 0;
    var arrTemp = [0, 1, 2, 3, 4, 5, 6, 7];
    return arrTemp.map((item, index) => {
      return (
        <div className={`cinema-row row-${index + 1}`}>
          {this.renderGhe(object.slice(i, (i += 10)))}
        </div>
      );
    });
  };
  renderPhuong = () => {
    const { danhSachGhe } = this.props;
    let temp = danhSachGhe.length;
    let temp1 = temp / 2 / 8;
    const arr1 = danhSachGhe.slice(0, 80);
    const arr2 = danhSachGhe.slice(80, 160);
    return (
      <>
        <div className="cinema-seats left">{this.renderHangGhe(arr1)}</div>
        <div className="cinema-seats right">{this.renderHangGhe(arr2)}</div>
      </>
    );

    // const arr1 = danhSachGhe.danhSachGhe.slice(0, 79);
    // const arr2 = danhSachGhe.danhSachGhe.slice(80, 159);

    // const arr2 = this.props.danhSachGhe.slice(80, 160);
    // return (
    //   <>
    //     {/* <div className="cinema-seats left">{this.renderHangGhe(arr1)}</div>
    //     <div className="cinema-seats right">{this.renderHangGhe(arr2)}</div> */}
    //   </>
    // );
  };
  // renderGheOne = () => {
  //   const { danhSachGhe } = this.props;
  //   return danhSachGhe.danhSachGhe.map((ghe, index) => {
  //     return <div className="seat"></div>;
  //   });
  // };
  render() {
    return (
      // <div className="text-light text-left ml-5 mt-1">
      //   {this.renderHangGhe()}
      // </div>
      // <div className="cinema-seats left"></div>
      <>{this.renderPhuong()}</>
      // <>{this.renderGheOne()}</>

      // <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dangSachGheDangDat: state.DatVeReducer.dangSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(DatGeAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
