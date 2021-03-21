import React, { Component } from "react";
import { LayThongTinHeThongRap } from "../modules/url";
import { connect } from "react-redux";
import { actLGApi } from "../modules/action";

import Loader from "../../../../components/Loader";

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
    const renderLogo = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          if (i === 0)
            return (
              <a
                className="list-group-item list-group-item-action active"
                id={item.maHeThongRap}
                data-toggle="list"
                href={"#" + item.biDanh}
                role="tab"
                aria-controls="home"
                onClick={() => {
                  this.setState({
                    indexCinema: i,
                  });
                }}
              >
                <img src={item.logo} className="w-100" alt="" />
              </a>
            );
          else
            return (
              <a
                className="list-group-item list-group-item-action"
                id={item.maHeThongRap}
                data-toggle="list"
                href={"#" + item.biDanh}
                role="tab"
                aria-controls="home"
                onClick={() => {
                  this.setState({
                    indexCinema: i,
                  });
                }}
              >
                <img src={item.logo} className="w-100" alt="" />
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
            className="tab-pane fade show active"
            id={data[this.state.indexCinema].biDanh}
            role="tabpanel"
            aria-labelledby={data[this.state.indexCinema].maHeThongRap}
          >
            {/* <CumRap
              key={data[this.state.indexCinema].biDanh}
              nameCinema={data[this.state.indexCinema].maHeThongRap}
            /> */}
          </div>
        )
      );
    };
    return (
      <div className="container my-5 cinemaListMovie">
        <div className="row wow animate__fadeInDown m-0" data-wow-delay="0.3s">
          <div className="col-1 p-0">
            <div
              className="list-group rounded-0 rounded-left"
              id="list-tab"
              role="tablist"
            >
              {renderLogo()}
            </div>
          </div>
          <div className="col-11 p-0">
            <div className="tab-content" id="nav-tabContent">
              {renderItem()}
            </div>
          </div>
        </div>
        <div>
          <p>
            <a
              className="btn btn-primary w-100"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              className="btn btn-primary w-100"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Button with data-target
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
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
