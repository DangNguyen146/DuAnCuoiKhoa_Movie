import * as ActionType from "./constant";
import Axios from "axios";

export const fetchUpdateApi = (user, token) => {
  return (dispatch) => {
    dispatch(actUserUpdateRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(actUserUpdateSuccess(result.data));
        localStorage.removeItem("userKH");
        alert("Thành công, Vui lòng đăng nhập lại");
        window.location.href = "/login";
      })
      .catch((err) => {
        dispatch(actUserUpdateFailed(err));
      });
  };
};

const actUserUpdateRequest = () => {
  return {
    type: ActionType.UPDATE_USER_REQUEST,
  };
};

const actUserUpdateSuccess = (data) => {
  return {
    type: ActionType.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const actUserUpdateFailed = (err) => {
  return {
    type: ActionType.UPDATE_USER_FAILED,
    payload: err,
  };
};

export const actDanhSachApi = (item) => {
  return (dispatch) => {
    dispatch(actDanhSachRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: { taiKhoan: item },
    })
      .then((result) => {
        dispatch(actDanhSachSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDanhSachFailed(err));
      });
  };
};

const actDanhSachRequest = () => {
  return {
    type: ActionType.DANGSACHPHIM_USER_REQUEST,
  };
};

const actDanhSachSuccess = (data) => {
  return {
    type: ActionType.DANGSACHPHIM_USER_SUCCESS,
    payload: data,
  };
};

const actDanhSachFailed = (err) => {
  return {
    type: ActionType.DANGSACHPHIM_USER_FAILED,
    payload: err,
  };
};
