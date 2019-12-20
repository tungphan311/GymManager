import { getAllEquipmentType } from "services/equipmentServices";
import {
  GET_EQUIPMENT_TYPE_SUCCESS,
  GET_EQUIPMENT_TYPE
} from "state/reducers/equipmentTypeReducer";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { toastErr } from "utils/utils";
export function* getAllEquipmentTypeSaga() {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(getAllEquipmentType);

    // yield toast({ message: "Lấy danh sách trang thiết bị thành công" });
    const equipmentTypes = results.data;
    yield put({ type: GET_EQUIPMENT_TYPE_SUCCESS, equipmentTypes });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}
export default function* equipmentsTypeSaga() {
  yield takeEvery(GET_EQUIPMENT_TYPE, getAllEquipmentTypeSaga);
}
