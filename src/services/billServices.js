import API from "utils/Axios";

export async function getBillsService() {
  return await API.get("/bills");
}

export async function getDashboard() {
  return await API.get("/stats/dashboard");
}
