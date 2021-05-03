import {
    LIST_USER_REQUEST,
    LIST_USER_SUCCESS,
    LIST_USER_FAILED
} from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
  };

  
const listUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LIST_USER_REQUEST:
        state.loading = true;
        state.data = null;
        state.err = null;
        return { ...state };
  
      case LIST_USER_SUCCESS:
        state.loading = false;
        state.data = action.payload;
        state.err = null;
        return { ...state };
  
      case LIST_USER_FAILED:
        state.loading = false;
        state.data = null;
        state.err = action.payload;
        return { ...state };
  
      default:
        return { ...state };
    }
  };
  
  export default listUserReducer;