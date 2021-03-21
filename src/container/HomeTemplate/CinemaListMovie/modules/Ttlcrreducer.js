import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const ttlcrCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TTLCR_CINEMA_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.TTLCR_CINEMA_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.TTLCR_CINEMA_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default ttlcrCinemaReducer;
