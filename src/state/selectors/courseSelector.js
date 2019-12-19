import { get } from "lodash";

export const getClassesWithId = (state, id) => {
  const course = get(state, "course") || {};

  return course[id];
};
