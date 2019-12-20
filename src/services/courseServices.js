import API from "utils/Axios";

export async function getAllCourse() {
  return await API.get("/classes");
}
export async function deleteCourse({ courseID }) {
  const url = "/classes/delete/" + courseID;
  return await API.get(url);
}

export async function getClassesService({ id, haspt }) {
  return await API.get(`/classes/classtype/${id}/${haspt}`);
}

export async function addCourse({
  name,
  haspt,
  classtypeid,
  durationdays,
  price
}) {
  return await API.post("/classes", {
    name,
    haspt,
    classtypeid,
    durationdays,
    price
  });
}

export async function getClassById({ id }) {
  return await API.get(`/classes/${id}`);
}
