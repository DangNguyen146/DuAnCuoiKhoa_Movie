import {
  MOVIE_INFOR_REQUEST,
  MOVIE_INFOR_SUCCESS,
  MOVIE_INFOR_FAILED,
} from "./constant";
import Axios from "axios";



export const fetchMovieInforApi = (movieCode) => {
  return (dispatch) => {
      dispatch(actMovieInforRequest());
      Axios({
          url:
              `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
          method: "GET",
      })
      .then((result) =>{
          dispatch(actMovieInforSuccess(result.data));
          localStorage.setItem("MovieInfor", JSON.stringify(result.data));
      })
      .catch((err)=>{
          dispatch(actMovieInforFailed(err));
      })
  }
}


const actMovieInforRequest = () => {
  return {
    type: MOVIE_INFOR_REQUEST,
  };
};

const actMovieInforSuccess = (data) => {
  return {
    type: MOVIE_INFOR_SUCCESS,
    payload: data,
  };
};

const actMovieInforFailed = (err) => {
  return {
    type: MOVIE_INFOR_FAILED,
    payload: err,
  };
};
