import { takeEvery, put, call } from "redux-saga/effects";
import { GET_CLASS, GET_CLASS_SUCCESS } from "state/reducers/courseReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { toastErr } from "utils/utils";
import { getClassesService } from "services/courseServices";

export function* getClassesSaga({ id }) {
  try {
    yield put({ type: SET_LOADING });

    const result = yield call(getClassesService, { id });

    yield put({ type: GET_CLASS_SUCCESS, payload: result.data, id });
  } catch (err) {
    yield toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* courseSaga() {
  yield takeEvery(GET_CLASS, getClassesSaga);
}
