import {
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};


const deleteMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case DELETE_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case DELETE_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default deleteMovieReducer;