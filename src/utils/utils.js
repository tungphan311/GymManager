import Toaster from "Components/Toastify/Toaster";
import { toast as toaster } from "react-toastify";
import React from "react";

export function getToken(key) {
  return localStorage.getItem(key);
}

export function buildErr(errCode, params = {}) {
  return {
    errCode,
    ...params
  };
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

export function toast({ type = "success", message = "" }) {
  return toaster(<Toaster type={type} message={message} />);
}
