import { required, validEmail, minLength6, maxLength15 } from "utils/validate";
import { buildErr } from "utils/utils";

export const require = value =>
  required(value) ? undefined : buildErr("Missing required field");

export const email = value =>
  validEmail(value) ? undefined : buildErr("Invalid email");

export const password = value => {
  // console.log(value);
  if (minLength6(value) && maxLength15(value)) {
    return undefined;
  } else {
    return buildErr("Invalid password");
  }
};
