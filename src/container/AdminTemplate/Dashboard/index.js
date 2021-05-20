import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../../components/Loader";
import { fetchListUserApi } from "../ListUserPage/modules/action";
import { fetchListMovieApi } from "../MoviePage/ListMoviePage/modules/action";


class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchListUser(1);
    this.props.fetchListMovie(1);
  }
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container-plus">

        <div className="row" style={{ padding: '0px 20px 0px 20px' }}>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4 card-item">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Quản lý người dùng</div>
                   
                    <NavLink className="txt2" to="/list-user">
                      Đi tới trang →
                    </NavLink>
                  </div>
                  <div className="col-auto">
                  
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
                   
                    <NavLink className="txt2" to="/list-movie">
                      Đi tới trang →
                    </NavLink>
                  </div>
                  <div className="col-auto">
                 
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
                    <NavLink className="txt2" to="/list-ticket">
                        Đi tới trang →
                    </NavLink>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                      
                      </div>
                      <div className="col">
                 
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
               
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
                      Quản lý rạp chiếu
                      </div>
                      <NavLink className="txt2" to="/list-cinema">
                        Đi tới trang →
                    </NavLink>
                  
                  </div>
                  <div className="col-auto">
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Content Row */}
<div className="row dashboard-table">
  {/* Content Column */}
  <div className="col-lg-6 mb-4">
    {/* Project Card Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Dashboard</h6>
      </div>
      <div className="card-body">
        <h4 className="small font-weight-bold">Quản lý người dùng <span className="float-right">80%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <h4 className="small font-weight-bold">Quản lý phim <span className="float-right">50%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <h4 className="small font-weight-bold">Quản lý vé <span className="float-right">70%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <h4 className="small font-weight-bold">Quản lý rạp chiếu <span className="float-right">60%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
        </div>
      
      
      </div>
    </div>
    {/* Color System */}
   
  </div>
  <div className="col-lg-6 mb-4">
    {/* Illustrations */}
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
Future</h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={process.env.PUBLIC_URL + '/img/settings-3311592_1280.png'} alt />
        </div>
        <p>Trong tương lai chúng tôi mong muốn có thể hoàn thiện tốt hệ thống quản lý một cách hoàn thiện nhất. Sản phẩm còn nhiều sai sát người dùng đóng góp ý kiến để chúng tôi hoàn thiện tốt hơn.</p>
       
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
