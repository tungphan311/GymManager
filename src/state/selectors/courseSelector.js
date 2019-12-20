import { get } from "lodash";

export const getCoursesSelector = state => get(state, "course.courses") || [];
