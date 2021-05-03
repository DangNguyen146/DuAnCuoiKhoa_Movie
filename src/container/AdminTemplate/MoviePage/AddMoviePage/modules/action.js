import {
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILED,
} from "./constant";
import Axios from "axios";

export const fetchAddMovieApi = (movie) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(actAddMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        console.log(result.data);
        dispatch(actAddMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actAddMovieFailed(err));
      });
  };
};

const actAddMovieRequest = () => {
  return {
    type: ADD_MOVIE_REQUEST,
  };
};

const actAddMovieSuccess = (data) => {
  return {
    type: ADD_MOVIE_SUCCESS,
    payload: data,
  };
};

const actAddMovieFailed = (err) => {
  return {
    type: ADD_MOVIE_FAILED,
    payload: err,
  };
};
