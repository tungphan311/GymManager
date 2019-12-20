import { all, call } from "redux-saga/effects";
import authSaga from "state/sagas/authSaga";
import staffSaga from "state/sagas/staffSaga";
import initSaga from "state/sagas/initSaga";
import equipmentSaga from "state/sagas/equipmentSaga";
import courseSaga from "state/sagas/courseSaga";
import memberSaga from "state/sagas/memberSaga";
import billSaga from "state/sagas/billSaga";
import equipmentsTypeSaga from "state/sagas/equipmentTypeSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    staffSaga(),
    initSaga(),
    courseSaga(),
    equipmentSaga(),
    memberSaga(),
    billSaga(),
    courseSaga(),
    equipmentsTypeSaga()
  ]);
}

export function* callAndCache(...args) {
  try {
    yield call(...args);
    // yield put(SET_CACHED_MARKER)
  } catch (error) {
    throw error;
  }
}
