import {
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
  LIST_CINEMA_FAILED
} from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
  };

  
const listCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
      case LIST_CINEMA_REQUEST:
        state.loading = true;
        state.data = null;
        state.err = null;
        return { ...state };
  
      case LIST_CINEMA_SUCCESS:
        state.loading = false;
        state.data = action.payload;
        state.err = null;
        return { ...state };
  
      case LIST_CINEMA_FAILED:
        state.loading = false;
        state.data = null;
        state.err = action.payload;
        return { ...state };
  
      default:
        return { ...state };
    }
  };
  
  export default listCinemaReducer;