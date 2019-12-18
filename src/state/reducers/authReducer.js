export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_FAIL = "auth/LOGIN_FAIL";

export const LOGOUT = "auth/LOGOUT";
export const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";

export const GET_SESSION = "auth/GET_SESSION";

const initState = {
  token: null
};

export function authReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case LOGIN_SUCCESS: {
      newState.token = action.payload.token;
      return newState;
    }
    case LOGIN_FAIL: {
      newState.identity = null;
      newState.loginSuccess = false;
      return newState;
    }

    default:
      return newState;
  }
}
