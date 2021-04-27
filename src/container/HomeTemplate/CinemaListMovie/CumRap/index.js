import React, { Component } from "react";
import Loader from "../../../../components/Loader";
import { LayThongTinCumRapTheoHeThong } from "../modules/url";
import { connect } from "react-redux";
import { actHTApi } from "../modules/action";
import LichChieuRap from "../LichChieuRap";

class CumRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexCinema: 0,
    };
  }
  componentDidMount() {
    const { nameCinema } = this.props;

    this.props.fetchHTCinema(nameCinema);
  }

  render() {
    const customText = (text, index = 21) => {
      if (text.length < index) return text;
      else return text.slice(0, index) + " ...";
    };

    const renderLogo = () => {
      const { loading, data } = this.props;

      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <a
              className="list-group-item list-group-item-action"
              id={"cinema" + data.maCumRap}
              data-toggle="list"
              href={"#Cinema" + item.maCumRap}
              role="tab"
              aria-controls="home"
              onClick={() => {
                this.setState({
                  indexCinema: i,
                });
              }}
            >
              <div className="row">
                <div className="col-3">
                  <div
                    style={{
                      height: "52.6px",
                      width: "100%",
                      backgroundColor: "#555",
                    }}
                  ></div>
                </div>
                <div className="col-9">
                  <p style={{ margin: "0" }}>
                    <b>{customText(item.tenCumRap, 21)}</b>
                  </p>
                  <p style={{ margin: "0", lineHeight: "6px" }}>
                    <i style={{ fontSize: "12px" }}>
                      {customText(item.diaChi, 32)}
                    </i>
                  </p>
                  <p style={{ margin: "0", fontSize: "12px" }}>[Chi tiết]</p>
                </div>
              </div>
            </a>
          );
        })
      );
    };

    const renderItem = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data && (
          <div
            className="tab-pane fade show active LichChieuRap"
            id={"Cinema" + data[this.state.indexCinema].maCumRap}
            role="tabpanel"
            aria-labelledby={"cinema" + data[this.state.indexCinema].maCumRap}
          >
            <LichChieuRap
              key={data[this.state.indexCinema].biDanh}
              maCumRap={data[this.state.indexCinema].maCumRap}
              danhSachRap={data[this.state.indexCinema].danhSachRap}
              nameCinema={this.props.nameCinema}
            />
          </div>
        )
      );
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 px-0">
            <div
              className="list-group rounded-0 CumRap "
              id="list-tab"
              role="tablist"
            >
              {renderLogo()}
            </div>
          </div>
          <div className="col-8 p-0">
            <div className="tab-content" id="nav-tabContent">
              {renderItem()}
            </div>
          </div>
        </div>
      </div>
    );
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
    fetchHTCinema: (nameCinema) => {
      dispatch(actHTApi(LayThongTinCumRapTheoHeThong, nameCinema));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CumRap);
