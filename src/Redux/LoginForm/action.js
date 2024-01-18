import {
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  SAVE_FORM_ERROR,
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

export const formSaveRequestAction = () => {
  return { type: SAVE_FORM_REQUEST };
};
export const formSaveSuccessAction = (payload) => {
  return { type: SAVE_FORM_SUCCESS, payload };
};

export const formSaveErrorAction = () => {
  return { type: SAVE_FORM_ERROR };
};

//Update
export const userUpdateRequestAction = () => {
  return { type: UPDATE_USER_REQUEST };
};
export const userUpdateSuccessAction = (payload) => {
  return { type: UPDATE_USER_SUCCESS, payload };
};
export const userUpdateErrorAction = () => {
  return { type: UPDATE_USER_ERROR };
};

//Delete
export const userDeleteRequestAction = () => {
  return { type: DELETE_USER_REQUEST };
};
export const userDeleteSuccessAction = (payload) => {
  return { type: DELETE_USER_SUCCESS, payload };
};
export const userDeleteErrorAction = () => {
  return { type: DELETE_USER_ERROR };
};
