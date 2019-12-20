export const ADD_MEMBER = "member/ADD_MEMBER";
export const ADD_MEMBER_SUCCESS = "member/ADD_MEMBER_SUCCESS";

export const GET_MEMBER = "member/GET_MEMBER";
export const GET_MEMBER_SUCCESS = "member/GET_MEMBER_SUCCESS";

const initState = {
  members: []
};

export function memberReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_MEMBER_SUCCESS:
      return null;

    case GET_MEMBER_SUCCESS: {
      newState.members = action.payload;
      return newState;
    }

    default:
      return newState;
  }
}
