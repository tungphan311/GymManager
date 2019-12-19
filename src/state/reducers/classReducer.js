export const GET_CLASS = "class/GET_CLASS";
export const GET_CLASS_SUCCESS = "class/GET_CLASS_SUCCESS";

const initState = {
  1: [],
  2: [],
  3: [],
  4: []
};

export function classReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
}
