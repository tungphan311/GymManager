export const ADD_EQUIPMENT = "equipment/ADD_EQUIPMENT";
export const ADD_EQUIPMENT_SUCCESS = "equipment/ADD_EQUIPMENT_SUCCESS";
export const GET_EQUIPMENT_SUCCESS = "equipment/GET_EQUIPMENT_SUCCESS";
export const GET_EQUIPMENT = "equipment/GET_EQUIPMENT";
export const DELETE_EQUIPMENT = "equipment/DELETE_EQUIPMENT";
export const DELETE_EQUIPMENT_SUCCESS = "equipment/DELETE_EQUIPMENT_SUCCESS";
export const FILTER_EQUIPMENT = "equipment/FILTER_EQUIPMENT";
export const FILTER_EQUIPMENT_SUCCESS = "equipment/FILTER_EQUIPMENT_SUCCESS";

const initState = {
  equipments: []
};

export function equipmentReducer(state = initState, action = {}) {
  let newState = { ...state };

  switch (action.type) {
    case GET_EQUIPMENT_SUCCESS: {
      const { equipments } = action;
      newState.equipments = equipments;
      return newState;
    }
    case DELETE_EQUIPMENT_SUCCESS: {
      const { equipmentID } = action;
      newState.equipments = newState.equipments.filter(
        equipment => equipment.ID !== equipmentID
      );
      return newState;
    }
    case FILTER_EQUIPMENT_SUCCESS: {
      const { response } = action;
      newState.equipments = response;
      console.log(response);
      return newState;
    }
    default:
      return newState;
  }
}
