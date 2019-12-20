export const ADD_MEMBER = "member/ADD_MEMBER";
export const ADD_MEMBER_SUCCESS = "member/ADD_MEMBER_SUCCESS";

export const EDIT_MEMBER = "member/EDIT_MEMBER";
export const EDIT_MEMBER_SUCCESS = "member/EDIT_MEMBER_SUCCESS";

export const GET_MEMBER_BY_ID = "member/GET_MEMBER_BY_ID";
export const GET_MEMBER_BY_ID_SUCCESS = "GET_MEMBER_BY_ID_SUCCESS";

const initState = {};

export function memberReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_MEMBER_SUCCESS:
      return null;
    case GET_MEMBER_BY_ID_SUCCESS: {
      const { results } = action;
      newState.memberData = results.data;
      return newState;
    }
    default:
      return newState;
  }
}
