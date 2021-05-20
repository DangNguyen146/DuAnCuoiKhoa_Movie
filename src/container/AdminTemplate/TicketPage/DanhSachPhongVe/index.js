import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Loader from '../../../../components/Loader';
import { fetchListCinemaApi } from '../../CinemaPage/ListCinemaPage/modules/action';
import { fetchGroupCinemaApi } from '../../CinemaPage/ThongTinTheoCumRap/modules/action';


class DanhSachPhongVe extends Component {


    componentDidMount() {
        this.props.fetchListCinema();
        this.props.fetchMovieCode("BHDStar");
    }

    chiTietRap(maHeThongRap) {
        this.props.fetchMovieCode(maHeThongRap);
    }

    renderChiTietHeThongRap = () => {
        const { loadingGroupCinema, dataGroupCinema } = this.props;
        if (loadingGroupCinema) return <Loader />;
        return (
            dataGroupCinema &&
            dataGroupCinema.map((item) => {
                return (
                    <>
                        <tr key={item.maHeThongRap}>
                            <td >{item.tenCumRap} </td>
                            {/* <td >{item.maCumRap} </td> */}
                            <td>
                            {item.maCumRap}
                            </td>
                            <td >{item.diaChi} </td>
                            {/* {item.danhSachRap.map((dsItem) => {
                                return (
                                <td key={dsItem.maRap}>
                                    {dsItem.tenRap}
                                </td>
                                )
                            })} */}
                         
                        </tr>


                    </>


                );

            })
        );
    }

    renderHeThongRap = () => {
        const { loading, data } = this.props;
        if (loading) return <Loader />;
        return (
            data &&
            data.map((item) => {
                return (
                    <div className="col-2" >
                        <div className="card" type="button" onClick={() => { this.chiTietRap(item.maHeThongRap) }} key={item.maHeThongRap}>
                            <img src={item.logo} className="card-img-top" alt="..." style={{ padding: 10 }} />
                        </div>
                    </div>
                )
            })
        );
    };




    render() {
        const { data } = this.props;

        return (
            <div className="container">

                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col">
                                    <h2 style={{ color: 'white' }}>Danh sách phòng vé</h2>
                                </div>

                            </div>
                        </div>

                        <div className="">
                            {/* <h2>Chọn hệ thống rạp</h2> */}
                            <div className="row">
                                {this.renderHeThongRap()}
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
                                <th>Tên cụm rạp</th>
                                <th>Mã cụm rạp</th>
                                <th>Địa chỉ</th>
                               
                                {/* <th>Tác vụ</th> */}
                                {/* <th>d</th>
                                <th>t</th> */}
                            </thead>

                            <tbody>

                                {/* {this.renderHTML()} */}
                                {this.renderChiTietHeThongRap()}

                            </tbody>
                        </table>
                        <div className="clearfix">
                            {/* <div className="hint-text">Showing <b>{this.state.count}</b> out of <b>{this.state.totalCount}</b> entries</div> */}

                            {/* {this.renderPagination()} */}
                        </div>
                    </div>


                </div>
            </div>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieCode: (maHeThongRap) => {
            dispatch(fetchGroupCinemaApi(maHeThongRap));
        },

        fetchListCinema: () => {
            dispatch(fetchListCinemaApi());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachPhongVe);

