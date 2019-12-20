import { takeEvery, put, call } from "redux-saga/effects";
import { INIT_DATA } from "state/reducers/initReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { getMentor } from "services/staffServices";
import { GET_MENTOR_SUCCESS } from "state/reducers/staffReducer";
import { toastErr } from "utils/utils";
import { LOGIN_SUCCESS } from "state/reducers/authReducer";

export function* initDataSaga() {
  try {
    yield put({ type: SET_LOADING });

    const result = yield call(getMentor, {
      roleid: 1
    });

    const response = result.data.map(ele => {
      const Obj = {
        value: ele.ID,
        label: ele.FullName
      };
      return Obj;
    });

    yield put({ type: GET_MENTOR_SUCCESS, response });

    const token = yield JSON.parse(localStorage.getItem("identity"));

    yield put({ type: LOGIN_SUCCESS, payload: { token } });
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* initSaga() {
  yield takeEvery(INIT_DATA, initDataSaga);
}
