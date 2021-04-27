import * as ActionType from "./constant";
import Axios from "axios";

export const actDetailMovieApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailMovieFailed(err));
      });
  };
};
const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (err) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: err,
  };
};
