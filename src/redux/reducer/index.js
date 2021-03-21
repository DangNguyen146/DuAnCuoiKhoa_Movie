import { combineReducers } from "redux";
import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import listMoviceReducer from "./../../container/ListMoviePage/modules/reducer";
import logoReducer from "./../../container/HomeTemplate/CinemaListMovie/modules/LGreducer";
import hethongCinemaReducer from "../../container/HomeTemplate/CinemaListMovie/modules/Htreducer";
import ttlcrCinemaReducer from "./../../container/HomeTemplate/CinemaListMovie/modules/Ttlcrreducer";
import ttlpCinemaReducer from "./../../container/HomeTemplate/CinemaListMovie/modules/TtlpReducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  listMoviceReducer,
  logoReducer,
  hethongCinemaReducer,
  ttlcrCinemaReducer,
  ttlpCinemaReducer,
});

export default rootReducer;
