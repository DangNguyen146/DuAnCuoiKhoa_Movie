import {
  ADD_TICKET_REQUEST,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const addTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKET_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ADD_TICKET_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ADD_TICKET_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default addTicketReducer;
