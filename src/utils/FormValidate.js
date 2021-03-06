import {
  required,
  validEmail,
  minLength6,
  maxLength15,
  validString,
  validNumber,
  validDob,
  validID,
  requiredSelect,
  checkClassTypeId
} from "utils/validate";
import { buildErr } from "utils/utils";
import history from "state/history";
import store from "state/store";

export const require = value =>
  required(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");

export const email = value =>
  validEmail(value) ? undefined : buildErr("Email không hợp lệ");

export const password = value => {
  // console.log(value);
  if (minLength6(value) && maxLength15(value)) {
    return undefined;
  } else {
    return buildErr("Mật khẩu không hợp lệ");
  }
};

export const validName = value =>
  validString(value) ? undefined : buildErr("Vui lòng nhập họ tên hợp lệ");

export const validPhone = value =>
  validNumber(value)
    ? undefined
    : buildErr("Vui lòng nhập số điện thoại hợp lệ");

export const validD = value =>
  validDob(value) ? undefined : buildErr("Vui lòng nhập ngày sinh hợp lệ");

export const matchPassword = (value, allValues) =>
  value !== allValues.password
    ? buildErr("Mật khẩu không trùng khớp. Vui lòng nhập lại")
    : undefined;

export const idValid = value =>
  validID(value) ? undefined : buildErr("Vui lòng nhập số CMND hợp lệ");

export const requireSelect = value =>
  requiredSelect(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");
