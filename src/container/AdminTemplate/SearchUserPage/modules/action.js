import {
    SEARCH_USER_REQUEST,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILED
} from "./constant";

import Axios from "axios";

export const actListMovieApi = (keyword) => {
  return (dispatch) => {
    dispatch(actSearchUserRequest());
    Axios({
      url:
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actSearchUserSuccess(result.data));
        localStorage.setItem("SearchUserByAccount", JSON.stringify(result.data));
      })
      .catch((err) => {
        dispatch(actSearchUserFailed(err));
      });
  };
};

const actSearchUserRequest = () => {
  return {
    type: SEARCH_USER_REQUEST,
  };
};

const  actSearchUserSuccess = (data) => {
  return {
    type: SEARCH_USER_SUCCESS,
    payload: data,
  };
};

const  actSearchUserFailed = (err) => {
  return {
    type: SEARCH_USER_FAILED,
    payload: err,
  };
};
