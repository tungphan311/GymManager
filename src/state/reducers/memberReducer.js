export const ADD_MEMBER = "member/ADD_MEMBER";
export const ADD_MEMBER_SUCCESS = "member/ADD_MEMBER_SUCCESS";

const initState = {};

export function memberReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_MEMBER_SUCCESS:
      return null;
    default:
      return newState;
  }
}
