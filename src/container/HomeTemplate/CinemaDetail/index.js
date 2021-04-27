import React, { Component } from "react";
import { connect } from "react-redux";
import { LayThongTinLichChieuHeThongRap } from "../CinemaListMovie/modules/url";
import { actTTLCRApi } from "../CinemaListMovie/modules/action";
import Loader from "../../../components/Loader";

class CinemaDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchTTLCRCinema(id);
  }
  render() {
    const renderItem = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return data;
    };
    return (
      <div>
        <p>{renderItem()}</p>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetail);
