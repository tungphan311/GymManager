export const GET_CLASS = "course/GET_CLASS";
export const GET_CLASS_SUCCESS = "course/GET_CLASS_SUCCESS";

const initState = {
  1: [],
  2: [],
  3: [],
  4: []
};

export function courseReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case GET_CLASS_SUCCESS: {
      const { payload, id } = action;

      newState[id] = payload;

      return newState;
    }

    default:
      return newState;
  }
}
