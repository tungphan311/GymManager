export const ADD_STAFF = "staff/ADD_STAFF";
export const ADD_STAFF_SUCCESS = "staff/ADD_STAFF_SUCCESS";
export const GET_MENTOR = "staff/GET_MENTOR";
export const GET_MENTOR_SUCCESS = "staff/GET_MENTOR_SUCCESS";

const initState = {
  trainer: [
    {
      value: 0,
      label: "Chọn huấn luyện viên"
    }
  ]
};

export function staffReducer(state = initState, action = {}) {
  let newState = { ...state };

  switch (action.type) {
    case GET_MENTOR_SUCCESS: {
      const { response } = action;
      // newState.trainer.push(response);
      response.map(ele => {
        newState.trainer.push(ele);
        return null;
      });
      console.log(newState);
      return newState;
    }
    default:
      return newState;
  }
}
