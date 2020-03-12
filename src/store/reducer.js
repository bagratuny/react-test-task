import { SEND_FORM, ENTER_FORM, UPDATE_FORM } from "./types";
import {
  formatPhone,
  unFormatPhone
} from "../common/utils/phoneFormatter";
import { dateValidator, nameValidator, phoneValidator } from "../common/utils/validators";

const defaultState = {
  form: {
    name: { value: "", valid: false },
    phone: { value: "", valid: false },
    startDate: { value: "", valid: false },
    endDate: { value: "", valid: false }
  },
  formValid: false,
  isFormEntered: false,
  isFormSent: false
};

export const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ENTER_FORM:
      return { ...state, form: payload, isFormEntered: true };
    case SEND_FORM:
      return { ...state, isFormSent: true };
    case UPDATE_FORM:
      return updateForm(state, payload);

    default:
      return state;
  }
};

const validateDatesConsistent = (startDate, endDate) => {
  const revertDate = date => {
    date = date.split(".");
    return new Date(date[2], date[1], date[0]);
  };

  const startDateUtc = revertDate(startDate).getTime();
  const endDateUtc = revertDate(endDate).getTime();
  return endDateUtc - startDateUtc >= 1;
};

const updateForm = (state, { name, value }) => {
  let entity;

  if (name === "phone") {
    value = unFormatPhone(value);
    if (value.length > 10) {
      return { ...state };
    }
    const formattedPhone = formatPhone(value);
    entity = {
      value: formattedPhone,
      valid: phoneValidator(formattedPhone)
    };
  }

  if (name === "name") {
    entity = { value, valid: nameValidator(value) };
  }

  if (name === "startDate" || name === "endDate") {
    entity = { value, valid: dateValidator(value) };
  }

  const newState = {
    ...state,
    form: { ...state.form, [name]: entity }
  };

  const datesConsistent = validateDatesConsistent(
    newState.form.startDate.value,
    newState.form.endDate.value
  );

  return {
    ...newState,
    datesConsistent,
    formValid:
      newState.form.phone.valid &&
      newState.form.name.valid &&
      newState.form.startDate.valid &&
      newState.form.endDate.valid &&
      datesConsistent
  };
};
