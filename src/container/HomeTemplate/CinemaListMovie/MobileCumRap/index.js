import React, { Component } from "react";
import { LayThongTinHeThongRap } from "../modules/url";
import { connect } from "react-redux";
import { actLGApi } from "../modules/action";

import Loader from "../../../../components/Loader";
import CumRapMobile from "../CumRapMobile";

class MobileCumRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexCinema: 0,
    };
  }
  componentDidMount() {
    this.props.fetchLoGoCinema();
  }
  render() {
    const renderItem = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data && (
          <CumRapMobile
            key={data[this.state.indexCinema].maHeThongRap}
            maHeThongRap={data[this.state.indexCinema].maHeThongRap}
          />
        )
      );
    };
    const renderLogo = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <div className="card">
              <div className="card-header" id={item.maHeThongRap}>
                <button
                  className="btn btn-link text-redorange btn-block shadow-none text-muted border-0 text-left container-fluid"
                  type="button"
                  data-toggle="collapse"
                  data-target={"#" + item.maHeThongRap + i}
                  aria-expanded="true"
                  aria-controls={item.maHeThongRap + i}
                  onClick={() => {
                    this.setState({
                      indexCinema: i,
                    });
                  }}
                >
                  <div className="row">
                    <div className="col-3">
                      <img src={item.logo} className="w-100" alt="" />
                    </div>
                    <div className="col-9 text-muted ">
                      <h4 className="text-decoration-none ">
                        {item.tenHeThongRap}
                      </h4>
                    </div>
                  </div>
                </button>
              </div>
              <div
                id={item.maHeThongRap + i}
                className="collapse "
                aria-labelledby={item.maHeThongRap}
                data-parent="#accordionExample"
              >
                {renderItem()}
              </div>
            </div>
          );
        })
      );
    };
    return (
      <div className="accordion mt-5" id="accordionExample">
        {renderLogo()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.logoReducer.loading,
    data: state.logoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLoGoCinema: () => {
      dispatch(actLGApi(LayThongTinHeThongRap));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileCumRap);
