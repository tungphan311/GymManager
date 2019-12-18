export const required = value => value;

export const maxLength = max => value => value && value.length <= max;

export const maxLength15 = maxLength(15);

export const minLength = min => value => value && value.length >= min;

export const minLength6 = minLength(6);

export const number = value => value && isNaN(Number(value));

export const minValue = min => value => value && value < min;

export const minValue13 = minValue(13);

export const tooYoung = value => value && value < 18;

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value);

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value);

export const validEmail = email =>
  /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export const validString = string => /^[a-zA-Z ]+$/.test(string);
export const validNumber = string => /^[0-9]+$/.test(string);
export const validDob = string => {
  const today = new Date().getFullYear();
  return (
    today - string.getFullYear() >= 18 && today - string.getFullYear() <= 50
  );
};
