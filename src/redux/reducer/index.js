import { combineReducers } from "redux";
import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import listMoviceReducer from "./../../container/ListMoviePage/modules/reducer";
import logoReducer from "./../../container/HomeTemplate/CinemaListMovie/modules/LGreducer";
import hethongCinemaReducer from "../../container/HomeTemplate/CinemaListMovie/modules/Htreducer";
import ttlcrCinemaReducer from "./../../container/HomeTemplate/CinemaListMovie/modules/Ttlcrreducer";
import ttlpCinemaReducer from "./../../container/HomeTemplate/CinemaListMovie/modules/TtlpReducer";
import detailMovieReducer from "./../../container/HomeTemplate/DetailPage/modules/reducer";
import DatVeReducer from "./../../container/HomeTemplate/BookingTicket/Modules/datveReducer";
import lichChieuReducer from "./../../container/HomeTemplate/BookingTicket/Modules2/reducer";
import HistoryReducer from "./../../container/HomeTemplate/User/Modules/reducer";

//admin
import authReducer from "./../../container/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "./../../container/AdminTemplate/AddUserPage/modules/reducer";
import listUserReducer from "./../../container/AdminTemplate/ListUserPage/modules/reducer";
import deleteUserReducer from "./../../container/AdminTemplate/DeleteUserPage/modules/reducer";
import updateUserReducer from "./../../container/AdminTemplate/UpdateUserPage/modules/reducer";
import addTicketReducer from "./../../container/AdminTemplate/TicketPage/AddTicketPage/modules/reducer";
import addMovieReducer from "./../../container/AdminTemplate/MoviePage/AddMoviePage/modules/reducer";
import listMovieReducer from "./../../container/AdminTemplate/MoviePage/ListMoviePage/modules/reducer";
import deleteMovieReducer from "./../../container/AdminTemplate/MoviePage/DeleteMoviePage/modules/reducer";
import searchUserReducer from "./../../container/AdminTemplate/SearchUserPage/modules/reducer";
import updateMovieReducer from "./../../container/AdminTemplate/MoviePage/UpdateMoviePage/modules/reducer";
import movieInforReducer from "./../../container/AdminTemplate/MoviePage/MovieInforPage/modules/reducer";
import listCinemaReducer from "./../../container/AdminTemplate/CinemaPage/ListCinemaPage/modules/reducer";
import groupCinemaReducer from "./../../container/AdminTemplate/CinemaPage/ThongTinTheoCumRap/modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  listMoviceReducer,
  logoReducer,
  hethongCinemaReducer,
  ttlcrCinemaReducer,
  ttlpCinemaReducer,
  detailMovieReducer,
  lichChieuReducer,
  DatVeReducer,
  HistoryReducer,

  // admin reducer

  authReducer,
  addUserReducer,
  listUserReducer,
  deleteUserReducer,
  updateUserReducer,
  addTicketReducer,
  addMovieReducer,
  searchUserReducer,
  listMovieReducer,
  deleteMovieReducer,
  updateMovieReducer,
  movieInforReducer,
  listCinemaReducer,
  groupCinemaReducer,
});

export default rootReducer;
