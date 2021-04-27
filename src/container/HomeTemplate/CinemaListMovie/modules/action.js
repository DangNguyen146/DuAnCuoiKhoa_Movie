import * as ActionType from "./constant";
import Axios from "axios";

/**
 * LayThongTinHeThongRap
 */
export const actLGApi = (url) => {
  return (dispatch) => {
    dispatch(actLGRequest());
    Axios({
      url,
      method: "GET",
    })
      .then((result) => {
        dispatch(actLGSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actLGFailed(err));
      });
  };
};

/**
 * Hệ thống cinema
 */
export const actHTApi = (url, nameCinema) => {
  return (dispatch) => {
    dispatch(actHTRequest());
    Axios({
      url: url + nameCinema,
      method: "GET",
    })
      .then((result) => {
        dispatch(actHTSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actHTFailed(err));
      });
  };
};

/**
 * LayThongTinLichChieuPhim
 */
export const actTTLCPApi = (url, maPhim) => {
  return (dispatch) => {
    dispatch(actTTLCPRequest());
    Axios({
      url: url + maPhim,
      method: "GET",
    })
      .then((result) => {
        dispatch(actTTLCPSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actTTLCPFailed(err));
      });
  };
};

/**
 * LayThongTinLichChieuHeThongRap
 */
export const actTTLCRApi = (url, nameCinema, text) => {
  return (dispatch) => {
    dispatch(actTTLCRRequest());
    Axios({
      url: url + nameCinema + text,
      method: "GET",
    })
      .then((result) => {
        dispatch(actTTLCRSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actTTLCRFailed(err));
      });
  };
};

const actLGRequest = () => {
  return {
    type: ActionType.LG_CINEMA_REQUEST,
  };
};
const actLGSuccess = (data) => {
  return {
    type: ActionType.LG_CINEMA_SUCCESS,
    payload: data,
  };
};
const actLGFailed = (err) => {
  return {
    type: ActionType.LG_CINEMA_FAILED,
    payload: err,
  };
};

const actHTRequest = () => {
  return {
    type: ActionType.HT_CINEMA_REQUEST,
  };
};
const actHTSuccess = (data) => {
  return {
    type: ActionType.HT_CINEMA_SUCCESS,
    payload: data,
  };
};
const actHTFailed = (err) => {
  return {
    type: ActionType.HT_CINEMA_FAILED,
    payload: err,
  };
};

const actTTLCRRequest = () => {
  return {
    type: ActionType.TTLCR_CINEMA_REQUEST,
  };
};
const actTTLCRSuccess = (data) => {
  return {
    type: ActionType.TTLCR_CINEMA_SUCCESS,
    payload: data,
  };
};
const actTTLCRFailed = (err) => {
  return {
    type: ActionType.TTLCR_CINEMA_FAILED,
    payload: err,
  };
};

const actTTLCPRequest = () => {
  return {
    type: ActionType.TTLCP_FILM_REQUEST,
  };
};
const actTTLCPSuccess = (data) => {
  return {
    type: ActionType.TTLCP_FILM_SUCCESS,
    payload: data,
  };
};
const actTTLCPFailed = (err) => {
  return {
    type: ActionType.TTLCP_FILM_FAILED,
    payload: err,
  };
};
