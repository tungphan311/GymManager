export const ADD_STAFF = "staff/ADD_STAFF";
export const ADD_STAFF_SUCCESS = "staff/ADD_STAFF_SUCCESS";

export const GET_MENTOR = "staff/GET_MENTOR";
export const GET_MENTOR_SUCCESS = "staff/GET_MENTOR_SUCCESS";
export const GET_STAFF = "staff/GET_STAFF";
export const GET_STAFF_SUCCESS = "staff/GET_STAFF_SUCCESS";
export const DELETE_STAFF_SUCCESS = "staff/DELETE_STAFF_SUCCESS";
export const DELETE_STAFF = "staff/DELETE_STAFF";
export const FILTER_STAFF = "staff/FILTER_STAFF";
export const FILTER_STAFF_SUCCESS = "staff/FILTER_STAFF_SUCCESS";
export const GET_STAFF_BY_ID = "staff/GET_STAFF_BY_ID";
export const GET_STAFF_BY_ID_SUCCESS = "staff/GET_STAFF_BY_ID_SUCCESS";

export const EDIT_STAFF = "staff/EDIT_STAFF";
const initState = {
  trainer: [
    {
      value: 0,
      label: "Chọn huấn luyện viên"
    }
  ],
  staffs: []
};

export function staffReducer(state = initState, action = {}) {
  let newState = { ...state };

  switch (action.type) {
    case GET_MENTOR_SUCCESS: {
      const { response } = action;

      newState.trainer = [...newState.trainer, ...response];

      return newState;
    }
    case DELETE_STAFF_SUCCESS: {
      const { staffID } = action;

      newState.staffs = newState.staffs.filter(staff => staff.ID !== staffID);
      return newState;
    }

    case FILTER_STAFF_SUCCESS: {
      const { response } = action;
      newState.staffs = response;
      return newState;
    }

    case GET_STAFF_SUCCESS: {
      const { staffs } = action;
      newState.staffs = staffs;
      return newState;
    }
    case GET_STAFF_BY_ID_SUCCESS: {
      const { results } = action;
      newState.staffData = results.data;
      return newState;
    }
    default:
      return newState;
  }
}
