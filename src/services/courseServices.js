import API from "utils/Axios";

export async function getAllCourse() {
  return await API.get("/classes");
}
export async function deleteCourse({ courseID }) {
  const url = "/classes/delete/" + courseID;
  return await API.get(url);
}
