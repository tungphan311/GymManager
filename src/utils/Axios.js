import axios from "axios";

const API_URL = "http://172.16.45.176:5555/api";

const API = axios.create({
  baseURL: API_URL
});

API.defaults.headers.post["Content-Type"] = "application/json";

export default API;
