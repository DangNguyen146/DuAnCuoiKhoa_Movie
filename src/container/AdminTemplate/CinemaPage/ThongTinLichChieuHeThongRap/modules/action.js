import {
    GROUP_SYSTEM_CINEMA_REQUEST,
    GROUP_SYSTEM_CINEMA_SUCCESS,
    GROUP_SYSTEM_CINEMA_FAILED
} from "./constant";

import Axios from "axios";



export const fetchGroupSystemCinemaApi = (maHeThongRap) => {
    return (dispatch) => {
        dispatch(actGroupSystemCinemaRequest());
        Axios({
            url:
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
            method: "GET",
        })
        .then((result) =>{
            dispatch(actGroupSystemCinemaSuccess(result.data));
            localStorage.setItem("GroupSystemCinema", JSON.stringify(result.data));
        })
        .catch((err)=>{
            dispatch(actGroupSystemCinemaFailed(err));
        })
    }
}

const actGroupSystemCinemaRequest = () => {
    return {
        type: GROUP_SYSTEM_CINEMA_REQUEST,
    };
};

const actGroupSystemCinemaSuccess = (data) => {
    return {
        type: GROUP_SYSTEM_CINEMA_SUCCESS,
        payload: data,
    };
};

const actGroupSystemCinemaFailed = (err) => {
    return {
        type: GROUP_SYSTEM_CINEMA_FAILED,
        payload: err,
    };
};