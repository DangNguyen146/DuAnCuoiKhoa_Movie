import {
    LIST_TICKET_REQUEST,
    LIST_TICKET_SUCCESS,
    LIST_TICKET_FAILED,
  } from "./constant";

let initialState = {
    loading: false,
    data: null,
    err: null,
};


const listTicketReducer = (state = initialState, action) => {
    // console.log("action: ", action);
    switch (action.type) {
        case LIST_TICKET_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case LIST_TICKET_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case LIST_TICKET_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default listTicketReducer;
