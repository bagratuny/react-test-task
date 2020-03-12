export const nameValidator = value =>
  new RegExp(/^[а-яё ]{1,64}$/gi).test(value);
export const phoneValidator = value =>
  new RegExp(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/).test(value);
export const dateValidator = value =>
  new RegExp(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g).test(value);