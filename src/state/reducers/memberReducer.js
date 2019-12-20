export const ADD_MEMBER = "member/ADD_MEMBER";
export const ADD_MEMBER_SUCCESS = "member/ADD_MEMBER_SUCCESS";

export const GET_MEMBER = "member/GET_MEMBER";
export const GET_MEMBER_SUCCESS = "member/GET_MEMBER_SUCCESS";

export const EDIT_MEMBER = "member/EDIT_MEMBER";
export const EDIT_MEMBER_SUCCESS = "member/EDIT_MEMBER_SUCCESS";

export const GET_MEMBER_BY_ID = "member/GET_MEMBER_BY_ID";
export const GET_MEMBER_BY_ID_SUCCESS = "GET_MEMBER_BY_ID_SUCCESS";

export const GET_MEMBER_RECENTLY = "member/GET_MEMBER_RECENTLY";
export const DELETE_MEMBER_SUCCESS = "member/DELETE_MEMBER_SUCCESS";
export const DELETE_MEMBER = "member/DELETE_MEMBER";

const initState = {
  members: [{ value: 0, label: "Chọn hội viên" }],
  recently: [],
  fullmember: []
};

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

    case GET_MEMBER_SUCCESS: {
      const members = action.payload.map(item => ({
        value: parseInt(item.ID),
        label: item.FullName
      }));
      newState.fullmember = action.payload;
      newState.members = [...newState.members, ...members];
      return newState;
    }
    case DELETE_MEMBER_SUCCESS: {
      const { memberID } = action;

      newState.fullmember = newState.fullmember.filter(
        member => member.ID !== memberID
      );
      return newState;
    }

    case GET_MEMBER_RECENTLY: {
      newState.recently = action.payload;
      return newState;
    }

    default:
      return newState;
  }
}
