import {
    MOVIE_INFOR_REQUEST,
    MOVIE_INFOR_SUCCESS,
    MOVIE_INFOR_FAILED,
  } from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
};


const movieInforReducer = (state = initialState, action) => {
    // console.log("action: ", action);
    switch (action.type) {
        case MOVIE_INFOR_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case MOVIE_INFOR_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case MOVIE_INFOR_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default movieInforReducer;
