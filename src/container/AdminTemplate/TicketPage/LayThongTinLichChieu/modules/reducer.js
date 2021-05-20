import {
    CINEMA_INFOR_REQUEST,
    CINEMA_INFOR_SUCCESS,
    CINEMA_INFOR_FAILED,
  } from "./constant";



let initialState = {
    loading: false,
    data: null,
    err: null,
};


const cinemaInforReducer = (state = initialState, action) => {
    switch (action.type) {
        case CINEMA_INFOR_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case CINEMA_INFOR_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case CINEMA_INFOR_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default cinemaInforReducer;
