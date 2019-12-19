import { get } from "lodash";

export const getCoursesSelector = state => get(state, "course.courses") || [];

export const getClassesWithId = (state, id) => {
  const course = get(state, "course") || {};

  return course[id];
};
