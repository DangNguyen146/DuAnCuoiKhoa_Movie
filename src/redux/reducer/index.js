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
});

export default rootReducer;
