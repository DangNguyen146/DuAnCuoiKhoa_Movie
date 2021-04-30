import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./constant";
import Axios from "axios";
import { Redirect } from "react-router";

export const fetchLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          dispatch(actLoginSuccess(result.data));
          localStorage.setItem("userKH", JSON.stringify(result.data));
          if (localStorage.getItem("idDatVe") !== null) {
            let temp = JSON.parse(localStorage.getItem("idDatVe"));
            history.push("/datve/" + temp);
          } else {
            history.push("/");
          }
        } else {
          return Promise.reject({
            response: { data: "Lỗi" },
          });
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: err,
  };
};
