export const GET_COURSE = "course/GET_COURSE";
export const GET_COURSE_SUCCESS = "course/GET_COURSE_SUCCESS";

export const DELETE_COURSE = "course/DELETE_COURSE";
export const DELETE_COURSE_SUCCESS = "cours/DELETE_COURSE_SUCCESS";

export const GET_CLASS = "course/GET_CLASS";
export const GET_CLASS_SUCCESS = "course/GET_CLASS_SUCCESS";

export const ADD_COURSE = "course/ADD_COURSE";

export const GET_CLASS_BY_ID = "course/GET_CLASS_BY_ID";
export const GET_CLASS_BY_ID_SUCCESS = "course/GET_CLASS_BY_ID_SUCCESS";
const initState = {
  courses: [],
  false1: [],
  false2: [],
  false3: [],
  false4: [],
  true2: [],
  true3: [],
  true4: []
};

export function courseReducer(state = initState, action = {}) {
  let newState = { ...state };

  switch (action.type) {
    case GET_COURSE_SUCCESS: {
      const { courses } = action;
      newState.courses = courses;
      return newState;
    }
    case DELETE_COURSE_SUCCESS: {
      const { courseID } = action;
      newState.courses = newState.courses.filter(
        course => course.ID !== courseID
      );
      return newState;
    }
    case GET_CLASS_SUCCESS: {
      const { payload, id, haspt } = action;

      newState[`${haspt}${id}`] = payload;

      return newState;
    }

    case GET_CLASS_BY_ID_SUCCESS: {
      const { results } = action;
      newState.courseData = results.data;
      return newState;
    }

    default:
      return newState;
  }
}
