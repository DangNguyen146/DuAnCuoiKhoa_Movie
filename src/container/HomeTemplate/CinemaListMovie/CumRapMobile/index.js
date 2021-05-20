import React, { Component } from "react";
import Loader from "../../../../components/Loader";
import { LayThongTinCumRapTheoHeThong } from "../modules/url";
import { connect } from "react-redux";
import { actHTApi } from "../modules/action";
import { Link } from "react-router-dom";

class CumRapMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexCinema: 0,
    };
  }
  componentDidMount() {
    const { maHeThongRap } = this.props;
    this.props.fetchHTCinema(maHeThongRap);
  }
  render() {
    const renderLogo = () => {
      const { loading, data } = this.props;

      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <Link
              className="btn btn-link btn-block  shadow-none  border-0 text-left p-0 "
              to={`/detailCinema/${
                this.props.maHeThongRap + "/" + item.maCumRap
              }`}
            >
              <div className="container-fluid">
                <div className=" mb-3">
                  <div className="row">
                    <div className="col-3">
                      <div
                        style={{
                          height: "70px",
                          width: "100%",
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
              </div>
            </Link>
          );
        })
      );
    };
    return <div className="card-body">{renderLogo()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.hethongCinemaReducer.loading,
    data: state.hethongCinemaReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHTCinema: (maHeThongRap) => {
      dispatch(actHTApi(LayThongTinCumRapTheoHeThong, maHeThongRap));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CumRapMobile);
