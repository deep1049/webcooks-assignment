import {
  DELETE_USER_SUCCESS,
  SAVE_FORM_ERROR,
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

const initialState = { FormDat: [], isLoading: false, isError: false };
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_FORM_REQUEST:
      return { ...state, isLoading: true };
    case SAVE_FORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        FormDat: [...state.FormDat, payload],
      };
    case SAVE_FORM_ERROR:
      return { ...state, isLoading: false, isError: true };
    case UPDATE_USER_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // UPDATE
        FormDat: state.FormDat.map((v) => {
          return payload.id === v.id ? payload : v;
        }),
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // DELETE
        FormDat: state.FormDat.filter((v) => {
          return payload !== v.id;
        }),
      };
    default:
      return state;
  }
};

export { reducer };
