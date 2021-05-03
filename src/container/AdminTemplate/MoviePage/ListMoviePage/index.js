import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from '../../../../components/Loader';
import Movie from '../../../../components/Movie';
import ReactPagination from '../../../../components/Pagination';
import { fetchListMovieApi } from './modules/action';


import MovieInfor from '../MovieInforPage';
import UpdateMovie from '../UpdateMoviePage';
import AddTicketPage from '../../TicketPage/AddTicketPage';

class ListMoviePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: "",
            totalPages: "",
            count: "",
            items: "",
            totalCount: "",
            movieInfor: "",
            movieUpdate: {
                biDanh: "",
                danhGia: "",
                hinhAnh: "",
                maPhim: "",
                moTa: "",
                ngayKhoiChieu: "",
                tenPhim: "",
                trailer: "",
                maNhom: "",
            },
        };
    }

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage },
            () => {
                this.props.fetchListMovie(numPage);
            });
    };


    getMovieCode = (movieCode) => {
        // console.log("userInfor form edit: ", userAccount);
        const { biDanh, danhGia, hinhAnh, maNhom, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer } = movieCode;

        this.setState({
            movieInfor: movieCode,
            movieUpdate: {
                biDanh,
                danhGia,
                hinhAnh,
                maPhim,
                moTa,
                ngayKhoiChieu,
                tenPhim,
                trailer,
                maNhom,
            },

        }, () => {
            // console.log("movie Update form edit : ", this.state.movieUpdate);
        });
    }

    componentDidMount() {
        const listMovieFromLocal = localStorage.getItem("ListMovie");
        const { currentPage, totalPages, count, items, totalCount } = JSON.parse(listMovieFromLocal);
        this.props.fetchListMovie(1); // Get the project when Component gets Mounted

        this.setState({
            currentPage,
            totalPages,
            count,
            items,
            totalCount,
        }, () => {
            // console.log(this.state.currentPage, this.state.totalPages, this.state.count, this.state.items);
        });
    }

    renderPagination = () => {
        return (
            <div style={{ float: 'right' }}>
                <div className="container">
                    <ReactPagination
                        currentPage={this.state.currentPage}
                        totalPages={this.state.totalPages}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="square-fill"
                    />
                </div>
            </div>
        )
    }

    renderModalInfor = () => {
        let { movieInfor } = this.state;
        return <MovieInfor key={movieInfor.maPhim} movieInfor={movieInfor} />;
    }

    renderModalUpdate = () => {
        let { movieUpdate } = this.state;
        return <UpdateMovie key={movieUpdate.maPhim} movieUpdate={movieUpdate} />;
    }

    renderModalTicket = () => {
        return <AddTicketPage key={this.state.movieUpdate.maPhim} addTicket={this.state.movieUpdate.maPhim} />;
    }

    renderNotiDelete = () => {
        const { err } = this.props;
        if (err) {
            // console.log("err cmm roi: ", err.response.data);
            // return <div className="alert alert-danger">{err.response.data}!</div>;
            return (
                <div id="card" className="animated fadeIn">

                    <div id="lower-side"  >
                        <p id="message" className="alert alert-danger">
                            {err.response.data}
                        </p>
                        <a href="#" id="contBtn">Đồng ý</a>
                    </div>
                </div>
            )
        } else {
            // return <div className="alert alert-success">Xóa thành công!</div>;

            return (
                <div id="card" className="animated fadeIn">

                    <div id="lower-side" >
                        <p id="message" className="alert alert-success">
                            Xóa thành công
                        </p>
                        <a href="#" id="contBtn">Đồng ý</a>
                    </div>
                </div>
            )
        }
    };


    renderHTML = () => {
        const { loading, data } = this.props;
        if (loading) return <Loader />;
        return (
            data &&
            data.items.map((item) => {
                return <Movie key={item.maPhim} movie={item} getMovieCode={this.getMovieCode} />;
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
                                    <h2 style={{color: 'white'}}>Quản lý phim</h2>
                                </div>
                             
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Mã phim</th>
                                    <th>Tên phim</th>
                                    <th>Ngày khởi chiếu</th>
                                    <th>Đánh giá</th>
                                    <th>Tác vụ</th>

                                </tr>
                            </thead>
                            <tbody>

                                {this.renderHTML()}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>{this.state.count}</b> out of <b>{this.state.totalCount}</b> entries</div>
                          
                            {this.renderPagination()}
                        </div>
                    </div>
                </div>


                {/* Modal */}
                <div className="modal fade" id="movieEdit" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Chi tiết phim</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.renderModalInfor()}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div >
                {/* modal update movie */}
                <div className="modal fade" id="updateMovie" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               {this.renderModalUpdate()}
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div> */}
                        </div>
                    </div>
                </div >
                      {/* modal add Ticket */}
                      <div className="modal fade" id="addTicket" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               {this.renderModalTicket()}
                            </div>
                         
                        </div>
                    </div>
                </div >

                {/* modal delete */}
                <div className="modal fade" id="modalMovieDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        {/* <div className="modal-content"> */}
                        <section>
                            <div className="rt-container">
                                <div className="col-rt-12">
                                    <div className="Scriptcontent">
                                        {/* partial:index.partial.html */}
                                        {this.renderNotiDelete()}
                                       

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
        err: state.deleteMovieReducer.err
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: (pageNumber) => {
            dispatch(fetchListMovieApi(pageNumber));
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
