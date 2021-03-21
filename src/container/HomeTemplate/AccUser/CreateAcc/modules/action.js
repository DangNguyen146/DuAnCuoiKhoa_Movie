import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILED,
} from "./constant";
import Axios from "axios";

export const fetchCreateApi = (user, history) => {
  return (dispatch) => {
    dispatch(actCreateRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          dispatch(actCreateSuccess(result.data));
          localStorage.setItem("userKH", JSON.stringify(result.data));
          history.push("/");
        } else {
          return Promise.reject({
            response: { data: "Lỗi" },
          });
        }
      })
      .catch((err) => {
        dispatch(actCreateFailed(err));
      });
  };
};

const actCreateRequest = () => {
  return {
    type: USER_CREATE_REQUEST,
  };
};

const actCreateSuccess = (data) => {
  return {
    type: USER_CREATE_SUCCESS,
    payload: data,
  };
};

const actCreateFailed = (err) => {
  return {
    type: USER_CREATE_FAILED,
    payload: err,
  };
};
