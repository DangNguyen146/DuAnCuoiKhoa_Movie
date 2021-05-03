import {
    GROUP_CINEMA_REQUEST,
    GROUP_CINEMA_SUCCESS,
    GROUP_CINEMA_FAILED
} from "./constant";

import Axios from "axios";



export const fetchGroupCinemaApi = (maHeThongRap) => {
    return (dispatch) => {
        dispatch(actGroupCinemaRequest());
        Axios({
            url:
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: "GET",
        })
        .then((result) =>{
            dispatch(actGroupCinemaSuccess(result.data));
            localStorage.setItem("GroupCinema", JSON.stringify(result.data));
        })
        .catch((err)=>{
            dispatch(actGroupCinemaFailed(err));
        })
    }
}

const actGroupCinemaRequest = () => {
    return {
        type: GROUP_CINEMA_REQUEST,
    };
};

const actGroupCinemaSuccess = (data) => {
    return {
        type: GROUP_CINEMA_SUCCESS,
        payload: data,
    };
};

const actGroupCinemaFailed = (err) => {
    return {
        type: GROUP_CINEMA_FAILED,
        payload: err,
    };
};