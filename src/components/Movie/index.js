import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDeleteMovieApi } from '../../container/AdminTemplate/MoviePage/DeleteMoviePage/modules/action';
import { fetchListMovieApi } from '../../container/AdminTemplate/MoviePage/ListMoviePage/modules/action';

class Movie extends Component {

  deleteMovie(maPhim) {
    const listMovieFromLocal = localStorage.getItem("ListMovie");
    const { currentPage } = JSON.parse(listMovieFromLocal);
    
      this.setState({ maPhim, },
        () => {
          this.props.fectDeleteMovie(maPhim);
          this.props.fetchListMovie(currentPage);
        });
    
  }

  render() {
    const { movie } = this.props;
    let date = movie.ngayKhoiChieu;
    let dateC = new Date(date).toLocaleString();
    return (

      <tr key={movie.maPhim}>
        <td>{movie.maPhim}</td>
        <td>{movie.tenPhim}</td>
        {/* <td>{movie.moTa}</td> */}
        <td>{dateC}</td>
        <td>{movie.danhGia}</td>
        <td>
          <a type="button" className="settings" title="Xem chi tiết" data-toggle="modal" data-target="#movieEdit" onClick={() => { this.props.getMovieCode(movie) }}><i className="mdi mdi-eye"></i></a>
          <a type="button" className="settings" title="Cập nhật phim" data-toggle="modal" data-target="#updateMovie" onClick={() => { this.props.getMovieCode(movie) }}><i className="mdi mdi-pencil"></i></a>
          <a type="button" className="settings" title="Tạo lịch chiếu" data-toggle="modal" data-target="#addTicket"><i className="mdi mdi-calendar-clock" onClick={() =>{ this.props.getMovieCode(movie) }}></i></a>
          <a type="button" className="delete" title="Xóa" data-toggle="modal" data-target="#modalMovieDelete"  onClick={() => { this.deleteMovie(movie.maPhim) }}><i className="mdi mdi-delete"></i></a>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fectDeleteMovie: (maPhim) => {
      dispatch(fetchDeleteMovieApi(maPhim));
    },
    fetchListMovie: (pageNumber) => {
      dispatch(fetchListMovieApi(pageNumber));
    }
  };
};

export default connect(null, mapDispatchToProps)(Movie);