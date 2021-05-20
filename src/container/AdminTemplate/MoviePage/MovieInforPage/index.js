import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../../../../components/Loader';
import { fetchCinemaInforTicketApi } from '../../TicketPage/LayThongTinLichChieu/modules/action';

import { fetchMovieInforApi } from './modules/action';

class MovieInfor extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchMovieInfor(id); // Get the project when Component gets Mounted
        this.props.fetchTicketInfor();
    }

    xemLichChieu(maLichChieu) {
        this.props.fetchTicketInfor(maLichChieu);
    }

    renderMaLichChieu = () => {
        const { dataMovie, loading } = this.props;
        if (loading) return <Loader />;
        return (
            dataMovie &&
            dataMovie.lichChieu.map((item) => {
                return (
                    <li type="button" onClick={() => { this.xemLichChieu(item.maLichChieu) }}><b>{item.maLichChieu}</b></li>
                )
            })
        );
    }

    renderDanhSachGhe = () => {
        const { loadingTicket, dataTicket } = this.props;
        if (loadingTicket) return <Loader />;
        return (
            dataTicket &&
            dataTicket.danhSachGhe.map((item) => {
                return (

                    <tr key={item.maGhe}>

                        <td>{item.tenGhe}</td>
                        <td>{item.maRap}</td>
                        <td>{item.loaiGhe}</td>
                        <td>{item.maGhe}</td>
                        {item.taiKhoanNguoiDat ?
                            <td style={{ color: 'blue' }}>{item.taiKhoanNguoiDat}</td> : <td style={{ color: 'red' }}>Chưa đặt</td>
                        }
                    </tr>

                )
            })
        );
    }





    render() {
        const { dataMovie, loading, loadingTicket, dataTicket } = this.props;
        if (loading) return <Loader />;
        if (loadingTicket) return <Loader />;

     
       
        return (
            <div className="container">
                <div className="row" style={{ backgound: 'white' }}>
                    <div className="col-sm-4 ">
                        {dataMovie ?
                            <img src={dataMovie.hinhAnh} ></img>
                            : <></>}
                    </div>
                    <div className="col-sm-8">
                        {dataMovie ?
                            <h3>{dataMovie.tenPhim}</h3>
                            : <></>}
                        {dataMovie ?
                            <p>Đánh giá: {dataMovie.danhGia}/10</p>
                            : <></>}
                        {dataMovie ?
                            <p>Mô tả: {dataMovie.moTa}</p>
                            : <></>}
                        {dataMovie ?
                            <p>Ngày khởi chiếu: {new Date(dataMovie.ngayKhoiChieu).toLocaleDateString()}</p>
                            : <></>}
                        {dataMovie ?
                            <p>Giá vé: {dataMovie.lichChieu[0].giaVe}</p>
                            : <></>}
                        {dataMovie ?
                            <p>Thời lượng: {dataMovie.lichChieu[0].thoiLuong} phút</p>
                            : <></>}
                        <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#Trailer" >Trailer</button>

                    </div>
                </div>

                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title table-movie">
                            <div className="row">
                                <div className="col">
                                    <h2 style={{ color: 'white', textAlign: 'center' }}>Lịch chiếu phim</h2>
                                </div>

                            </div>
                        </div>

                        <hr></hr>
                        <div className="row showLichChieu">
                            <div className="col-2 maLichChieu">
                                <p>Chọn mã lịch chiếu</p>
                                <ul>
                                    {this.renderMaLichChieu()}
                                </ul>
                            </div>
                            <div className="col-10" style={{ borderLeft: '1px solid' }}>
                                <div className="title-ticket"> <h3>Thông tin rạp chiếu</h3></div>

                                <table className="table table-striped table-hover">

                                    <thead>
                                        <th>Rạp chiếu</th>
                                        <th>Số rạp</th>
                                        <th>Giờ chiếu</th>
                                        <th>Ngày chiếu</th>
                                        <th>Địa chỉ</th>

                                    </thead>

                                    <tbody>

                                        <tr className="table-movie">

                                            {dataTicket ?
                                                <td>{dataTicket.thongTinPhim.tenCumRap}</td>
                                                : <></>
                                            }
                                            {dataTicket ?
                                                <td>{dataTicket.thongTinPhim.tenRap}</td>
                                                : <></>
                                            }
                                            {dataTicket ?
                                                <td>{dataTicket.thongTinPhim.gioChieu}</td>
                                                : <></>
                                            }
                                            {dataTicket ?
                                                <td>{dataTicket.thongTinPhim.ngayChieu}</td>
                                                : <></>
                                            }
                                            {dataTicket ?
                                                <td>{dataTicket.thongTinPhim.diaChi}</td>
                                                : <></>
                                            }
                                        </tr>
                                        {/* {this.renderThongTinPhim()} */}

                                    </tbody>
                                </table>
                                <hr></hr>
                                <div className="title-ticket"> <h3>Danh sách ghế</h3></div>

                                <div>
                                  
                                    <div className="dsGhe">
                                        <table className="table table-striped table-hover" >
                                        <thead >
                                                <th>Số ghế</th>
                                                <th>Số rạp</th>
                                                <th>Loại ghế</th>
                                                <th>Mã ghế</th>
                                                <th>Trạng thái ghế</th>

                                            </thead>
                                            <tbody >
                                                {this.renderDanhSachGhe()}
                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

                {/* Modal */}
                <div className="modal fade" id="Trailer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Trailer</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {dataMovie ?

                                    <iframe width="1100" height="600" src={dataMovie.trailer}
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                         encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    : <></>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.movieInforReducer.loading,
        dataMovie: state.movieInforReducer.data,

        loadingTicket: state.cinemaInforReducer.loading,
        dataTicket: state.cinemaInforReducer.data,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieInfor: (movieCode) => {
            dispatch(fetchMovieInforApi(movieCode));
        },

        fetchTicketInfor: (maLichChieu) => {
            dispatch(fetchCinemaInforTicketApi(maLichChieu));
        },

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieInfor);