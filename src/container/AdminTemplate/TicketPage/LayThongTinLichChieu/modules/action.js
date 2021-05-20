import {
  CINEMA_INFOR_REQUEST,
  CINEMA_INFOR_SUCCESS,
  CINEMA_INFOR_FAILED,
} from "./constant";
import Axios from "axios";



export const fetchCinemaInforTicketApi = (maLichChieu) => {
  return (dispatch) => {
      dispatch(actLCinemaInforRequest());
      Axios({
          url:
              `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
          method: "GET",
      })
      .then((result) =>{
          dispatch(actLCinemaInforSuccess(result.data));
          localStorage.setItem("CinemaInfor", JSON.stringify(result.data));
      })
      .catch((err)=>{
          dispatch(actLCinemaInforFailed(err));
      })
  }
}


const actLCinemaInforRequest = () => {
  return {
    type: CINEMA_INFOR_REQUEST,
  };
};

const actLCinemaInforSuccess = (data) => {
  return {
    type: CINEMA_INFOR_SUCCESS,
    payload: data,
  };
};

const actLCinemaInforFailed = (err) => {
  return {
    type: CINEMA_INFOR_FAILED,
    payload: err,
  };
};
