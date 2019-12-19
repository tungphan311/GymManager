import { all, call } from "redux-saga/effects";
import authSaga from "state/sagas/authSaga";
import staffSaga from "state/sagas/staffSaga";
import initSaga from "state/sagas/initSaga";
import equipmentSaga from "state/sagas/equipmentSaga";

export default function* rootSaga() {
  yield all([authSaga(), staffSaga(), initSaga(), equipmentSaga()]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
    // yield put(SET_CACHED_MARKER)
  } catch (error) {
    throw error;
  }
}
