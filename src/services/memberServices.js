import API from "utils/Axios";

export async function addMember({
  fullname,
  phone,
  gender,
  address,
  email,
  identitycard,
  staffid,
  birthdate
}) {
  return await API.post("/members", {
    fullname,
    phone,
    gender,
    address,
    email,
    staffid,
    identitycard,
    birthdate
  });
}

export async function getMember({ id }) {
  console.log(id);
  return await API.get(`/members/${id}`);
}
