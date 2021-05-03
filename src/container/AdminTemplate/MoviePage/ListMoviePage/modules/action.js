import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
} from "./constant";
import Axios from "axios";



export const fetchListMovieApi = (pageNumber) => {
  return (dispatch) => {
      dispatch(actListMovieRequest());
      Axios({
          url:
              `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${pageNumber}&soPhanTuTrenTrang=10`,
          method: "GET",
      })
      .then((result) =>{
          dispatch(actListMovieSuccess(result.data));
          localStorage.setItem("ListMovie", JSON.stringify(result.data));
      })
      .catch((err)=>{
          dispatch(actListMovieFailed(err));
      })
  }
}


const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (err) => {
  return {
    type: LIST_MOVIE_FAILED,
    payload: err,
  };
};
