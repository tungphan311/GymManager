import { LOGIN, LOGIN_SUCCESS } from "state/reducers/authReducer";
import { login } from "services/LoginServices";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { getFormValues } from "state/selectors/formSelector";
import { FORM_KEY_LOGIN } from "state/reducers/formReducer";
import history from "../history";
import { setStorage } from "../../utils/utils";

export function* loginSaga() {
  try {
    const { email, password } = yield select(state =>
      getFormValues(state, FORM_KEY_LOGIN)
    );

    const result = yield call(login, { email, password });
    const response = result.data;

    yield put({ type: LOGIN_SUCCESS, payload: response });

    yield setStorage("identity", JSON.stringify(response[0]));

    yield history.push("/");
  } catch (err) {
    // console.log(err);
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}
