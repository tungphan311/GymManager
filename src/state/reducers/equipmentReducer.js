export const ADD_EQUIPMENT = "equipment/ADD_EQUIPMENT";
export const ADD_EQUIPMENT_SUCCESS = "equipment/ADD_EQUIPMENT_SUCCESS";
export const GET_MENTOR = "equipment/GET_MENTOR";
export const GET_MENTOR_SUCCESS = "equipment/GET_MENTOR_SUCCESS";

const initState = {};

export function equipmentReducer(state = initState, action = {}) {
  let newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
}
