import Toaster from "Components/Toastify/Toaster";
import { toast as toaster } from "react-toastify";
import React from "react";
import { get } from "lodash";

export function getToken(key) {
  return localStorage.getItem(key);
}

export function buildErr(errCode, params = {}) {
  return {
    errCode,
    ...params
  };
}

export function setstaffInfosToSession(array) {
  const newArray = array.map(item => JSON.stringify(item));

  const stringArr = newArray.toString();

  sessionStorage.setItem("staffInfos", stringArr);
}

export function getPathname(pathname) {
  let path = "/";
  for (let i = 1; i < pathname.length; i++) {
    if (pathname.charAt(i) === "/") {
      break;
    } else {
      path = `${path}${pathname.charAt(i)}`;
    }
  }

  return path;
}

export function formatDate(datestr) {
  const date = new Date(datestr);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${d < 10 ? `0${d}` : d}/${m < 10 ? `0${m}` : m}/${y}`;
}

export function toast({ type = "success", message = "" }) {
  return toaster(<Toaster type={type} message={message} />);
}

export function setStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getItemFromStorage(key) {
  return localStorage.getItem(key);
}

export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

export function toastErr(error) {
  let errMsg = get(error, "response.data.Message");

  if (!errMsg) {
    errMsg = "Có lỗi xảy ra";
  }

  toast({ type: "error", message: errMsg });
}

export function formatGender(id) {
  if (id == 1) return "Nam";
  else if (id == 2) return "Nữ";
  else if (id == 3) return "Khác";
}

export function setStaffType(id) {
  if (id == 1) return "Toàn thời gian";
  else if (id == 2) return "Bán thời gian";
}
export function setRole(id) {
  switch (id) {
    case 1:
      return "Quản lý";

    case 2:
      return "Huấn luyện viên";

    case 3:
      return "Lễ tân";

    case 4:
      return "Kế toán";

    case 5:
      return "Quản lý thiết bị";

    default:
      break;
  }
}
