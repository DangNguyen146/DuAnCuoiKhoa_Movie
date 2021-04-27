import * as ActionType from "./constant";
import Axios from "axios";

export const actDatVeApi = (item, token) => {
  return (dispatch) => {
    dispatch(actDatVeRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: item,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(actDatVeSuccess(result.data));
        alert("Đặt vé thành công");
        window.location.href = "/";
      })
      .catch((err) => {
        dispatch(actDatVeFailed(err));
      });
  };
};

const actDatVeRequest = () => {
  return {
    type: ActionType.DATVE_REQUEST,
  };
};

const actDatVeSuccess = (data) => {
  return {
    type: ActionType.DATVE_SUCCESS,
    payload: data,
  };
};

const actDatVeFailed = (err) => {
  return {
    type: ActionType.DATVE_FAILED,
    payload: err,
  };
};
