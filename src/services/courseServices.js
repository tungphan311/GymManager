import API from "utils/Axios";

export async function getClassesService({ id }) {
  return await API.post(`/classes/classtype/${id}`);
}
