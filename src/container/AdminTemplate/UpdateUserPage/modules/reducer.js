import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
} from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
};




const updateUserReducer = (state = initialState, action) => {
    // console.log("action: ", action);
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case UPDATE_USER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case UPDATE_USER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default updateUserReducer;
