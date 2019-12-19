import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_CLASS } from "state/reducers/classReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";

export function* getClassesSaga() {
  try {
    yield put({ type: SET_LOADING });
  } catch (err) {
    // yield toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* authSaga() {
  yield takeEvery(GET_CLASS, getClassesSaga);
}
