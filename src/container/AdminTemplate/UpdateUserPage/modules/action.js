import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from "./constant";
import Axios from "axios";

export const fetchUpdateUserApi = (user) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(actUpdateUserRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actUpdateUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUpdateUserFailed(err));
      });
  };
};

const actUpdateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

const actUpdateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const actUpdateUserFailed = (err) => {
  return {
    type: UPDATE_USER_FAILED,
    payload: err,
  };
};
