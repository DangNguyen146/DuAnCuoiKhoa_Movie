import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListMovieApi } from '../ListMoviePage/modules/action';
import { fetchUpdateMovieApi } from './modules/action';

class UpdateMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            biDanh: this.props.movieUpdate.biDanh,
            danhGia: this.props.movieUpdate.danhGia,
            hinhAnh: this.props.movieUpdate.hinhAnh,
            maPhim: this.props.movieUpdate.maPhim,
            moTa: this.props.movieUpdate.moTa,
            ngayKhoiChieu: this.props.movieUpdate.ngayKhoiChieu,
            tenPhim: this.props.movieUpdate.tenPhim,
            trailer: this.props.movieUpdate.trailer,
            maNhom: this.props.movieUpdate.maNhom,
        };
    }

    hanldeOnchangeDate = (e) => {
        const { name, value } = e.target;
        const input = value;
        const [year, month, day] = input.split('-');
        const newDate = `${day}/${month}/${year}`;

        this.setState({
            // taiKhoan: taiKhoan,
            [name]: newDate,
        }, () => {
            // console.log("handOnChange update movie new date: ", this.state.ngayKhoiChieu);
        });
    }
    hanldeOnchange = (e) => {
        const { name, value } = e.target;
        this.setState({
            // taiKhoan: taiKhoan,
            [name]: value,
        }, () => {
            // console.log("handOnChange update movie page: ", this.state);
        });
    };

    updateMovie = (e) => {

        const listMovieFromLocal = localStorage.getItem("ListMovie");
        const { currentPage } = JSON.parse(listMovieFromLocal);
        // console.log("currentPage: ", currentPage);
        // const { err } = this.props;
        e.preventDefault();
        // console.log("this.state.movieUpdate: ", this.state);
        this.props.fectUpdateMovie(this.state);

        // if (!err) {
        this.props.fetchListMovie(currentPage);

        // };
    }


    render() {
        const { movieUpdate } = this.props;
        let date = movieUpdate.ngayKhoiChieu;
        let dateC = new Date(date).toLocaleString();
        return (
            <div className="container" >
                <h2 style={{ textAlign: 'center' }}>Cập nhật phim</h2>
                <div className="row p-5" style={{ border: '1px solid black' }}>
                    <div className="col-sm-7" style={{ textAlign: 'center' }}>
                        <iframe width="560" height="400" src={movieUpdate.trailer}
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="col-sm-5">
                        <form onSubmit={this.updateMovie}>

                            <div className="form-group">
                                <label htmlFor="fullName">Mã phim</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="maPhim"
                                    onChange={this.hanldeOnchange}

                                    defaultValue={movieUpdate.maPhim}
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="fullName">Tên phim</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="tenPhim"
                                    onChange={this.hanldeOnchange}
                                    defaultValue={movieUpdate.tenPhim} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="fullName">Bí danh</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="biDanh"
                                    onChange={this.hanldeOnchange}
                                    defaultValue={movieUpdate.biDanh}
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="fullName">Mô tả</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="moTa"
                                    onChange={this.hanldeOnchange}
                                    defaultValue={movieUpdate.moTa}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fullName">Hình ảnh</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="hinhAnh"
                                    onChange={this.hanldeOnchange}
                                    defaultValue={movieUpdate.hinhAnh}
                                />
                            </div>
                                <div className="form-group">
                                <span><b>Lịch chiếu hiện tại:</b> {dateC}</span>
                  
                            </div>
                            <div className="form-group ">
                                <label htmlFor="birthday">Lịch chiếu mới</label>
                                <input type="date" className="form-control" id="birthday"
                                    name="ngayKhoiChieu"
                                    onChange={this.hanldeOnchangeDate}
                                  
                                    defaultValue={movieUpdate.ngayKhoiChieu}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullName">Trailer</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="trailer"
                                    onChange={this.hanldeOnchange}
                                    defaultValue={movieUpdate.trailer}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullName">Đánh giá</label>
                                <input type="text" className="form-control" id="fullName"
                                    name="danhGia"
                                    onChange={this.hanldeOnchange}
                                    defaultValue={movieUpdate.danhGia}
                                />
                            </div>

                            <div className="form-group">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary btn-block">Cập nhật</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        err: state.updateMovieReducer.err,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fectUpdateMovie: (movie) => {
            dispatch(fetchUpdateMovieApi(movie));
        },
        fetchListMovie: (pageNumber) => {
            dispatch(fetchListMovieApi(pageNumber));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie);

