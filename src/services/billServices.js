import API from "utils/Axios";

export async function getBillsService() {
  return await API.get("/bills");
}
