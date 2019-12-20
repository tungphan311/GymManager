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

export async function getMemberService() {
  return await API.get("/members");
}

export async function getRecentMemberService() {
  return await API.get("/members/recently");
}

export async function getMember({ id }) {
  return await API.get(`/members/${id}`);
}

export async function deleteMember({ memberID }) {
  const url = "/members/delete/" + memberID;
  return await API.get(url);
}

export async function editMember({
  fullname,
  phone,
  gender,
  address,
  email,
  identitycard,
  staffid,
  birthdate,
  id
}) {
  return await API.put("/members", {
    fullname,
    phone,
    gender,
    address,
    email,
    identitycard,
    staffid,
    birthdate,
    id: parseInt(id)
  });
}
