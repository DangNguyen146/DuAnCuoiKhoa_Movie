import {
    LIST_USER_REQUEST,
    LIST_USER_SUCCESS,
    LIST_USER_FAILED
} from "./constant";

import Axios from "axios";



export const fetchListUserApi = (pageNumber) => {
    return (dispatch) => {
        dispatch(actListUserRequest());
        Axios({
            url:
                `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${pageNumber}&soPhanTuTrenTrang=8`,
            method: "GET",
        })
        .then((result) =>{
            dispatch(actListUserSuccess(result.data));
            localStorage.setItem("ListUser", JSON.stringify(result.data));
        })
        .catch((err)=>{
            dispatch(actListUserFailed(err));
        })
    }
}

const actListUserRequest = () => {
    return {
        type: LIST_USER_REQUEST,
    };
};

const actListUserSuccess = (data) => {
    return {
        type: LIST_USER_SUCCESS,
        payload: data,
    };
};

const actListUserFailed = (err) => {
    return {
        type: LIST_USER_FAILED,
        payload: err,
    };
};