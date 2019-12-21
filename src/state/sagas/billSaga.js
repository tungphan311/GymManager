import { takeEvery, put, call } from "redux-saga/effects";
import { GET_BILL, GET_BILL_SUCCESS } from "state/reducers/billReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { toastErr } from "utils/utils";
import { getBillsService } from "services/billServices";

export function* getBillSaga() {
  try {
    yield put({ type: SET_LOADING });

    const result = yield call(getBillsService);

    yield put({ type: GET_BILL_SUCCESS, payload: result.data });
  } catch (err) {
    yield toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* billSaga() {
  yield takeEvery(GET_BILL, getBillSaga);
}
