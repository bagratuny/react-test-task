import { SEND_FORM, ENTER_FORM, UPDATE_FORM } from './types';

export const enterForm = (payload) => dispatch => {
  dispatch({ type: ENTER_FORM, payload });
};

export const sendForm = () => dispatch => {
  dispatch({ type: SEND_FORM });
};

export const updateForm = (payload) => dispatch => {
  dispatch({ type: UPDATE_FORM, payload })
};