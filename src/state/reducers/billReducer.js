export const GET_BILL = "bill/GET_BILL";
export const GET_BILL_SUCCESS = "bill/GET_BILL_SUCCESS";

const initState = {
  bills: []
};

export function billReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case GET_BILL_SUCCESS: {
      newState.bills = action.payload;
      return newState;
    }

    default:
      return newState;
  }
}
