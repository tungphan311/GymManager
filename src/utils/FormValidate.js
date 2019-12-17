import {
  required,
  validEmail,
  minLength6,
  maxLength15,
  validString,
  validNumber,
  validDob,
  requiredSelect
} from "utils/validate";
import { buildErr } from "utils/utils";

export const require = value =>
  required(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");

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

export const validName = value =>
  validString(value) ? undefined : buildErr("Vui lòng nhập họ tên hợp lệ");

export const validPhone = value =>
  validNumber(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");

export const validD = value =>
  validDob(value) ? undefined : buildErr("Vui lòng nhập ngày sinh hợp lệ");
