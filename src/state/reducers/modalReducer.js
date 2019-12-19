export const TOGGLE_MODAL = "modal/TOGGLE_MODAL";
export const RESET_MODAL_STATE = "modal/RESET_MODAL_STATE";

// MODAL KEYS
export const MODAL_KEY_SELL_COURSE = "MODAL_KEY_SELL_COURSE";

const initState = {
  isOpen: false,
  id: 0
};

export function modalReducer(state = initState, action = {}) {
  const newState = { ...state };
  switch (action.type) {
    case TOGGLE_MODAL:
      const { status = null, id } = action;
      if (status !== null) {
        newState.isOpen = status;
      } else {
        newState.isOpen = !newState.isOpen;
      }
      newState.id = id;
      return newState;

    case RESET_MODAL_STATE: {
      return { ...initState };
    }
    default:
      return newState;
  }
}
