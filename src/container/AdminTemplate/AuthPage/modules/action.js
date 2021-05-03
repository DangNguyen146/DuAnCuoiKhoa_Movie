import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./contstant";
import Axios from "axios";


export const fetchLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          dispatch(actLoginSuccess(result.data));
          //Lưu trạng thái login success xuống localStorage
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          //Redirect qua trang dashboard admin
          history.push("/dashboard");
        } else {
          return Promise.reject({
            response: { data: "Không có quyền truy cập" },
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
    type: AUTH_PAGE_REQUEST,
  };
};

export const actLoginSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};

