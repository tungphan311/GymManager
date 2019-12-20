export const GET_EQUIPMENT_TYPE = "equipment/GET_EQUIPMENT_TYPE";
export const GET_EQUIPMENT_TYPE_SUCCESS =
  "equipment/GET_EQUIPMENT_TYPE_SUCCESS";

const initState = {
  equipmentTypes: []
};

export function equipmentTypeReducer(state = initState, action = {}) {
  let newState = { ...state };

  switch (action.type) {
    case GET_EQUIPMENT_TYPE_SUCCESS: {
      const { equipmentTypes } = action;
      console.log(equipmentTypes);
      newState.equipmentTypes = equipmentTypes;
      return newState;
    }
    default:
      return newState;
  }
}
