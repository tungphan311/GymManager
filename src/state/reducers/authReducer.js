import jwt_decode from "jwt-decode";

export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_FAIL = "auth/LOGIN_FAIL";

export const LOGOUT = "auth/LOGOUT";
export const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";

export const CHANGE_PASSWORD = "auth/CHANGE_PASSWORD";

const initState = {
  token: null,
  identity: {}
};

export function authReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { token } = action.payload;

      const decoded = jwt_decode(token);
      newState.identity = decoded;

      newState.token = token;
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
