import {
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
} from "./constant";
import Axios from "axios";


export const fetchDeleteMovieApi = (maPhim) => {

    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return (dispatch) => {
      dispatch(actDeleteMovieRequest());
      Axios({
        url:
          `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((result) => {
          // console.log(result.data);
          dispatch(actDeleteMovieSuccess(result.data));
        })
        .catch((err) => {
          dispatch(actDeleteMovieFailed(err));
        });
    };
  
};

const actDeleteMovieRequest = () => {
  return {
    type: DELETE_MOVIE_REQUEST,
  };
};

const actDeleteMovieSuccess = (data) => {
  return {
    type: DELETE_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDeleteMovieFailed = (err) => {
  return {
    type: DELETE_MOVIE_FAILED,
    payload: err,
  };
};
