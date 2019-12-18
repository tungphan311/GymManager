export const ADD_STAFF = "staff/ADD_STAFF";

const initState = {};

export function staffReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
}
