import API from "utils/Axios";
const queryString = require("query-string");

export async function addStaff({
  fullname,
  phone,
  gender,
  address,
  roleid,
  stafftypeid,
  email,
  beginday,
  birthdate
}) {
  return await API.post("/staffs", {
    fullname,
    phone,
    gender,
    address,
    roleid,
    stafftypeid,
    email,
    beginday,
    birthdate
  });
}

export async function getMentor(param) {
  const url = "/staffs?" + queryString.stringify(param);
  return await API.get(url);
}
