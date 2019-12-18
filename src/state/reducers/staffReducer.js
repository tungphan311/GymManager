export const ADD_STAFF = "staff/ADD_STAFF";
export const ADD_STAFF_SUCCESS = "staff/ADD_STAFF_SUCCESS";

const initState = {};

export function staffReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
}
