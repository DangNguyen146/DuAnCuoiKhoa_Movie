import {
  GROUP_SYSTEM_CINEMA_REQUEST,
  GROUP_SYSTEM_CINEMA_SUCCESS,
  GROUP_SYSTEM_CINEMA_FAILED
} from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
  };

  
const groupSystemCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
      case GROUP_SYSTEM_CINEMA_REQUEST:
        state.loading = true;
        state.data = null;
        state.err = null;
        return { ...state };
  
      case GROUP_SYSTEM_CINEMA_SUCCESS:
        state.loading = false;
        state.data = action.payload;
        state.err = null;
        return { ...state };
  
      case GROUP_SYSTEM_CINEMA_FAILED:
        state.loading = false;
        state.data = null;
        state.err = action.payload;
        return { ...state };
  
      default:
        return { ...state };
    }
  };
  
  export default groupSystemCinemaReducer;