/* eslint-disable prettier/prettier */
import API from "utils/Axios";

export async function login({ username, password }) {
  return await API.post("/login", { username, password });
}

export async function changePassword({ username, password, staffid }) {
  return await API.post("/change-password", { username, password, staffid });
}
