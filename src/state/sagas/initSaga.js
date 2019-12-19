import { takeEvery, put, call, select } from "redux-saga/effects";
import { INIT_DATA } from "state/reducers/initReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { getMentor } from "services/staffServices";
import { GET_MENTOR_SUCCESS } from "state/reducers/staffReducer";

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
  } catch (error) {
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* initSaga() {
  yield takeEvery(INIT_DATA, initDataSaga);
}
