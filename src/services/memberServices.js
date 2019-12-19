import API from "utils/Axios";

export async function addMember({
  fullname,
  phone,
  gender,
  address,
  roleid,
  membertypeid,
  email,
  beginday,
  birthdate
}) {
  return await API.post("/members", {
    fullname,
    phone,
    gender,
    address,
    roleid,
    membertypeid,
    email,
    beginday,
    birthdate
  });
}
