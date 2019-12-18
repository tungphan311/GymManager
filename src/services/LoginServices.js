/* eslint-disable prettier/prettier */
import API from "utils/Axios";

export async function login({ email, password }) {
    return await API.post("/login", { email, password });
}
