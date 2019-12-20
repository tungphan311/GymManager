import { get } from "lodash";

export const getCoursesSelector = state => get(state, "course.courses") || [];

export const getClassesWithId = (state, id, haspt) => {
  const course = get(state, "course") || {};

  return course[`${haspt}${id}`];
};

export const getClasseByIdSelector = state =>
  get(state, "course.courseData") || {};

export const getCourseNameSelector = state =>
  get(state, "course.courseData.Name") || "";
