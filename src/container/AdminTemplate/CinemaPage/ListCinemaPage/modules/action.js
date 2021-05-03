import {
    LIST_CINEMA_REQUEST,
    LIST_CINEMA_SUCCESS,
    LIST_CINEMA_FAILED
} from "./constant";

import Axios from "axios";



export const fetchListCinemaApi = () => {
    return (dispatch) => {
        dispatch(actListCinemaRequest());
        Axios({
            url:
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
            method: "GET",
        })
        .then((result) =>{
            dispatch(actListCinemaSuccess(result.data));
            localStorage.setItem("ListCinema", JSON.stringify(result.data));
        })
        .catch((err)=>{
            dispatch(actListCinemaFailed(err));
        })
    }
}

const actListCinemaRequest = () => {
    return {
        type: LIST_CINEMA_REQUEST,
    };
};

const actListCinemaSuccess = (data) => {
    return {
        type: LIST_CINEMA_SUCCESS,
        payload: data,
    };
};

const actListCinemaFailed = (err) => {
    return {
        type: LIST_CINEMA_FAILED,
        payload: err,
    };
};