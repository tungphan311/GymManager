export const ADD_MEMBER = "member/ADD_MEMBER";
export const ADD_MEMBER_SUCCESS = "member/ADD_MEMBER_SUCCESS";

export const GET_MEMBER = "member/GET_MEMBER";
export const GET_MEMBER_SUCCESS = "member/GET_MEMBER_SUCCESS";

const initState = {
  members: [{ value: 0, label: "Chọn hội viên" }]
};

export function memberReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_MEMBER_SUCCESS:
      return null;

    case GET_MEMBER_SUCCESS: {
      const members = action.payload.map(item => ({
        value: parseInt(item.ID),
        label: item.FullName
      }));
      newState.members = [...newState.members, ...members];
      return newState;
    }

    default:
      return newState;
  }
}
