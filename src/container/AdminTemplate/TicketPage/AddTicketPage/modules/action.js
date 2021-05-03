import {
  ADD_TICKET_REQUEST,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILED,
} from "./constant";
import Axios from "axios";

export const fetchAddTicketApi = (ticket) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(actAddTicketRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
      method: "POST",
      data: ticket,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actAddTicketSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actAddTicketFailed(err));
      });
  };
};

const actAddTicketRequest = () => {
  return {
    type: ADD_TICKET_REQUEST,
  };
};

const actAddTicketSuccess = (data) => {
  return {
    type: ADD_TICKET_SUCCESS,
    payload: data,
  };
};

const actAddTicketFailed = (err) => {
  return {
    type: ADD_TICKET_FAILED,
    payload: err,
  };
};
