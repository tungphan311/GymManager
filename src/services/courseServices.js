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

export async function buyClasses({ classid, memberid, staffid }) {
  return await API.post("/bills/buy", { classid, memberid, staffid });
}

export async function getTopClassesService() {
  return await API.get("/stats/topclasses");
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

export async function editCourse({
  name,
  haspt,
  classtypeid,
  durationdays,
  price,
  id
}) {
  return await API.put("/classes", {
    name,
    haspt,
    classtypeid,
    durationdays,
    price,
    id: parseInt(id)
  });
}

//  }) {
//    return await API.put("/classes", {
//     name,
//    haspt,
// classtypeid,
// durationdays,
// price,
//      id: parseInt(id)
//    }
//   })
// }
