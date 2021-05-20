import {
  LIST_TICKET_REQUEST,
  LIST_TICKET_SUCCESS,
  LIST_TICKET_FAILED,
} from "./constant";
import Axios from "axios";



export const fetchListTicketApi = (ticketCode) => {
  return (dispatch) => {
      dispatch(actListTicketRequest());
      Axios({
          url:
              `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${ticketCode}`,
          method: "GET",
      })
      .then((result) =>{
          dispatch(actListTicketSuccess(result.data));
          localStorage.setItem("ListTicket", JSON.stringify(result.data));
      })
      .catch((err)=>{
          dispatch(actListTicketFailed(err));
      })
  }
}


const actListTicketRequest = () => {
  return {
    type: LIST_TICKET_REQUEST,
  };
};

const actListTicketSuccess = (data) => {
  return {
    type: LIST_TICKET_SUCCESS,
    payload: data,
  };
};

const actListTicketFailed = (err) => {
  return {
    type: LIST_TICKET_FAILED,
    payload: err,
  };
};
