const initState = {
  token: null,
  loginSuccess: false,
  identity: {}
};

export function authReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
}
