import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "./constant";
import Axios from "axios";


export const fetchDeleteUserApi = (account) => {

    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return (dispatch) => {
      dispatch(actDeleteUserRequest());
      Axios({
        url:
          `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((result) => {
          console.log(result.data);
          dispatch(actDeleteUserSuccess(result.data));
        })
        .catch((err) => {
          
          dispatch(actDeleteUserFailed(err));
          
        });
    };
  
};

const actDeleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

const actDeleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFailed = (err) => {
  return {
    type: DELETE_USER_FAILED,
    payload: err,
    
  };
  
};
