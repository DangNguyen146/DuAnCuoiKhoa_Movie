import React, { Component } from "react";
import Loader from "../../../../components/Loader";
import { LayThongTinLichChieuHeThongRap } from "../modules/url";
import { connect } from "react-redux";
import { actTTLCRApi } from "../modules/action";
import LichChieuItem from "./LichChieuItem";

class LichChieuRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexCinema: 0,
    };
  }
  componentDidMount() {
    const { maCumRap, danhSachRap, nameCinema, maPhim } = this.props;
    this.props.fetchTTLCRCinema(nameCinema);
  }
  render() {
    const customText = (text, index = 21) => {
      if (text.length < index) return text;
      else return text.slice(0, index) + " ...";
    };

    const renderItem = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      if (data) {
        return (
          data &&
          data.map((item) => {
            return item.lstCumRap.map((itemCR) => {
              if (itemCR.maCumRap === this.props.maCumRap)
                return (
                  <LichChieuItem
                    key={itemCR.maCumRap}
                    danhSachPhim={itemCR.danhSachPhim}
                  ></LichChieuItem>
                );
            });
          })
        );
      }
    };

    return <ul className="list-unstyled">{renderItem()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.ttlcrCinemaReducer.loading,
    data: state.ttlcrCinemaReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTTLCRCinema: (nameCinema) => {
      dispatch(
        actTTLCRApi(LayThongTinLichChieuHeThongRap, nameCinema, "&maNhom=GP10")
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LichChieuRap);
