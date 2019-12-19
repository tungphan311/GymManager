import API from "utils/Axios";

export async function getClassesService({ id }) {
  return await API.get(`/classes/classtype/${id}`);
}
