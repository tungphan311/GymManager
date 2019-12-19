import { LOGIN, LOGIN_SUCCESS } from "state/reducers/authReducer";
import { login } from "services/LoginServices";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { getFormValues } from "state/selectors/formSelector";
import { FORM_KEY_LOGIN } from "state/reducers/formReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";
import jwt_decode from "jwt-decode";
import history from "../history";
import { setStorage, toast } from "../../utils/utils";

export function* loginSaga() {
  try {
    yield put({ type: SET_LOADING });

    const { username, password } = yield select(state =>
      getFormValues(state, FORM_KEY_LOGIN)
    );

    const result = yield call(login, { username, password });
    const response = result.data;

    yield put({ type: LOGIN_SUCCESS, payload: response });

    yield setStorage("identity", JSON.stringify(response.token));

    yield toast({ message: "Đăng nhập thành công" });

    const decoded = yield jwt_decode(response.token);
    const { isnew } = decoded;

    if (isnew) {
      yield history.push("/change-password");
    } else {
      yield history.push("/");
    }
  } catch (err) {
    yield toast({ type: "error", message: "Không thành công" });
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}
