import {
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILED,
} from "./constant";
import Axios from "axios";

export const fetchUpdateMovieApi = (movie) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(actUpdateMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actUpdateMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUpdateMovieFailed(err));
      });
  };
};

const actUpdateMovieRequest = () => {
  return {
    type: UPDATE_MOVIE_REQUEST,
  };
};

const actUpdateMovieSuccess = (data) => {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    payload: data,
  };
};

const actUpdateMovieFailed = (err) => {
  return {
    type: UPDATE_MOVIE_FAILED,
    payload: err,
  };
};
