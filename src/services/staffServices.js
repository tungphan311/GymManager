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

export async function filterStaff({ gender, roleid, stafftypeid }) {
  const url = "/staffs/filter";
  // console.log(gender, roleid, stafftypeid);
  return await API.post(url, { gender, roleid, stafftypeid });
}

export async function getAllStaff() {
  return await API.get("/staffs");
}

export async function deleteStaff({ staffID }) {
  const url = "/staffs/delete/" + staffID;
  return await API.get(url);
}

export async function getStaff({ id }) {
  // console.log(id);
  return await API.get(`/staffs/${id}`);
}

export async function editStaff({
  fullname,
  phone,
  gender,
  address,
  roleid,
  stafftypeid,
  email,
  beginday,
  birthdate,
  ID
}) {
  return await API.put("/staffs", {
    fullname,
    phone,
    gender,
    address,
    roleid,
    stafftypeid,
    email,
    beginday,
    birthdate,
    ID
  });
}
