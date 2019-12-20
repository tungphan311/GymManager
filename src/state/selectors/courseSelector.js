import { get } from "lodash";

export const getCoursesSelector = state => get(state, "course.courses") || [];

export const getClassesWithId = (state, id, haspt) => {
  const course = get(state, "course") || {};

  return course[`${haspt}${id}`];
};

export const getTopClassesSelector = state => get(state, "course.topClasses");
