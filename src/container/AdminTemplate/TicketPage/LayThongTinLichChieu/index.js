import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import Loader from '../../../../components/Loader';
import { fetchListCinemaApi } from '../../CinemaPage/ListCinemaPage/modules/action';
import { fetchGroupSystemCinemaApi } from '../../CinemaPage/ThongTinLichChieuHeThongRap/modules/action';
// import { fetchGroupCinemaApi } from '../../CinemaPage/ThongTinTheoCumRap/modules/action';

class CinemaInfor extends Component {



    componentDidMount() {
        this.props.fetchListCinema();
        this.props.fetchGroupInforCinema("BHDStar");
    }

    hanldOnChange = (e) => {
        const { value } = e.target;
        this.props.fetchGroupInforCinema(value);
    }

    renderCumRap = () => {
        const { loadingGroupCinemaInfor, dataGroupCinemaInfor } = this.props;
        if (loadingGroupCinemaInfor) return <Loader />;
        return (
            dataGroupCinemaInfor &&
            dataGroupCinemaInfor.map((dataItem) => {
                return (
                    dataItem.lstCumRap &&
                    dataItem.lstCumRap.map((dataListCumRap) => {
                        return (
                            dataListCumRap.danhSachPhim &&
                            dataListCumRap.danhSachPhim.map((dataDSPhim) => {
                                return (
                                    <tr key={dataDSPhim.maPhim}>

                                        <td >{dataDSPhim.maPhim} </td>
                                        <td >{dataDSPhim.tenPhim} </td>
                                        <td >
                                            <img src={dataDSPhim.hinhAnh} />
                                        </td>
                                        <td>
                                            {/* <Link  to={`/movie-infor/${dataDSPhim.maPhim}`} type="button" className="settings" title="Xem lịch chiếu" >Lịch chiếu phim</Link> */}
                                            <NavLink className="settings" to={`/movie-infor/${dataDSPhim.maPhim}`}>
                                                Xem lịch chiếu
                                            </NavLink>
                                        </td>


                                    </tr>

                                )
                            })
                        )
                    })
                )
            })
        )
    }

    renderLichChieuTheoPhim = () => {
        const { loadingGroupCinemaInfor, dataGroupCinemaInfor } = this.props;
        if (loadingGroupCinemaInfor) return <Loader />;
        return (
            dataGroupCinemaInfor &&
            dataGroupCinemaInfor.map((dataItem) => {
                return (
                    dataItem.lstCumRap &&
                    dataItem.lstCumRap.map((dataListCumRap) => {
                        return (
                            dataListCumRap.danhSachPhim &&
                            dataListCumRap.danhSachPhim.map((dataDSPhim) => {
                                return (

                                    dataDSPhim.lstLichChieuTheoPhim &&
                                    dataDSPhim.lstLichChieuTheoPhim.map((dataLichChieu) => {
                                        return (
                                            <div className="card" style={{ width: '18rem' }}>

                                                <img src="..." className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text">{dataLichChieu.giaVe}</p>
                                                    <p className="card-text">{dataLichChieu.maLichChieu}</p>
                                                </div>
                                            </div>
                                        )
                                    })

                                )
                            })
                        )
                    })
                )
            })
        )
    }

    renderHeThongRap = () => {
        const { loading, data } = this.props;
        if (loading) return <Loader />;
        return (
            data &&
            data.map((item) => {
                return (
                    <option key={item.maHeThongRap} >{item.maHeThongRap}</option>
                )
            })
        );
    };

    render() {
        return (
            <div className="container">

                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col">
                                    <h2 style={{ color: 'white' }}>Thông tin lịch chiếu phim</h2>
                                </div>

                            </div>
                        </div>

                        <div className="">
                            {/* <h2>Chọn hệ thống rạp</h2> */}
                            <div className="row">

                                <div className="col-5">

                                    <div className="row">
                                        <div className="col-4">
                                            <span>Chọn rạp</span>
                                        </div>
                                        <div className="col-8">
                                        <select className="custom-select" onChange={this.hanldOnChange}>
                                            {this.renderHeThongRap()}
                                            {/* <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option> */}
                                        </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr></hr>
                        <table className="table table-striped table-hover">
                            {/* <thead> */}

                            {/* <th>Mã phim</th>
                                            <th>Tên phim</th>
                                            <th>Ngày khởi chiếu</th>
                                            <th>Đánh giá</th>
                                            <th>Tác vụ</th> */}




                            {/* </thead> */}
                            <thead>
                                <th>Mã phim</th>
                                <th>Tên phim</th>
                                <th>Hình ảnh</th>

                                <th>Tác vụ</th>
                                {/* <th>d</th>
                                <th>t</th> */}
                            </thead>

                            <tbody>



                                {this.renderCumRap()}
                                {/* {this.renderHTML()} */}
                                {/* {this.renderChiTietHeThongRap()} */}

                            </tbody>
                        </table>
                        <div className="clearfix">
                            {/* <div className="hint-text">Showing <b>{this.state.count}</b> out of <b>{this.state.totalCount}</b> entries</div> */}

                            {/* {this.renderPagination()} */}
                        </div>
                    </div>


                </div>

                {/* modal infor movie */}
                <div className="modal fade" id="inforMovie" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">

                                    {this.renderLichChieuTheoPhim()}
                                </div>

                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div> */}
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {

        loadingGroupCinema: state.groupCinemaReducer.loading,
        dataGroupCinema: state.groupCinemaReducer.data,
        errGroupCinema: state.groupCinemaReducer.err,

        loading: state.listCinemaReducer.loading,
        data: state.listCinemaReducer.data,
        // err: state.listCinemaReducer.err,

        loadingGroupCinemaInfor: state.groupSystemCinemaReducer.loading,
        dataGroupCinemaInfor: state.groupSystemCinemaReducer.data,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchMovieCode: (maHeThongRap) => {
        //     dispatch(fetchGroupCinemaApi(maHeThongRap));
        // },

        fetchListCinema: () => {
            dispatch(fetchListCinemaApi());
        },
        fetchGroupInforCinema: (maHeThongRap) => {
            dispatch(fetchGroupSystemCinemaApi(maHeThongRap));
        }


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CinemaInfor);