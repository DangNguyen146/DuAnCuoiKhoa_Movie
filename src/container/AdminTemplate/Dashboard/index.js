import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { fetchListUserApi } from "../ListUserPage/modules/action";
import { fetchListMovieApi } from "../MoviePage/ListMoviePage/modules/action";


class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchListUser(1); // Get the project when Component gets Mounted
    this.props.fetchListMovie(1);
  }
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container-plus">
        <div className="d-sm-flex align-items-center justify-content-between mb-4" style={{padding: '0px 20px 0px 20px'}}>
          <h1 className="">Dashboard</h1>
        </div>
        <div className="row" style={{padding: '0px 20px 0px 20px'}}>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4 card-item">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Quản lý tài khoản</div>
                    {/* <div className="h5 mb-0 font-weight-bold">Total: {data.totalCount} account</div> */}
                  </div>
                  <div className="col-auto">
                    {/* <i className="mdi mdi-settings fa-2x " /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Annual) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4 card-item">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Quản lý phim</div>
                    {/* <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div> */}
                  </div>
                  <div className="col-auto">
                    {/* <i className="mdi mdi-movie fa-2x " /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tasks Card Example */}
          <div className="col-xl-3 col-md-6 mb-4 card-item">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Quản lý vé
              </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        {/* <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div> */}
                      </div>
                      <div className="col">
                        {/* <div className="progress progress-sm mr-2">
                          <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pending Requests Card Example */}
          <div className="col-xl-3 col-md-6 mb-4 card-item">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Quản lý rạp chiếu</div>
                    {/* <div className="h5 mb-0 font-weight-bold text-gray-800">18</div> */}
                  </div>
                  <div className="col-auto">
                    {/* <i className="fas fa-comments fa-2x text-gray-300" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loading: state.listUserReducer.loading,
    data: state.listUserReducer.data,
    err: state.listUserReducer.err
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListUser: (pageNumber) => {
      dispatch(fetchListUserApi(pageNumber));
    },
    fetchListMovie: (pageNumber) => {
      dispatch(fetchListMovieApi(pageNumber));
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
