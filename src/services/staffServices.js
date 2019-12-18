import API from "utils/Axios";

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
