import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  ADD_EQUIPMENT,
  ADD_EQUIPMENT_SUCCESS,
  GET_EQUIPMENT_SUCCESS,
  DELETE_EQUIPMENT_SUCCESS,
  GET_EQUIPMENT,
  DELETE_EQUIPMENT,
  FILTER_EQUIPMENT_SUCCESS,
  FILTER_EQUIPMENT
} from "state/reducers/equipmentReducer";
import { FORM_KEY_ADDEQUIPMENT } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import {
  addEquipment,
  deleteEquipment,
  getAllEquipment,
  filterDeviceService
} from "services/equipmentServices";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";

// export function* addEquipmentSaga() {
//   try {
//     yield put({ type: SET_LOADING });
//     const {
//       fullname,
//       phone,
//       gender,
//       address,
//       roleid,
//       equipmenttypeid,
//       email,
//       beginday,
//       birthdate
//     } = yield select(state => getFormValues(state, FORM_KEY_ADDEQUIPMENT));

//     const reqGender = parseInt(gender);
//     const reqRoleid = parseInt(roleid);
//     const reqequipmenttypei = parseInt(equipmenttypeid);

//     const reqBirthdate = formatDate(birthdate);
//     const reqBeginday = formatDate(beginday);

//     const results = yield call(addEquipment, {
//       fullname,
//       phone,
//       roleid: reqRoleid,
//       address,
//       gender: reqGender,
//       equipmenttypeid: reqequipmenttypei,
//       email,
//       beginday: reqBeginday,
//       birthdate: reqBirthdate
//     });
//     toast({ message: results.data });
//     yield put({ type: ADD_EQUIPMENT_SUCCESS });
//     yield put(reset(FORM_KEY_ADDEQUIPMENT));
//   } catch (error) {
//     toastErr(error);
//   } finally {
//     yield put({ type: SET_LOADING, status: false });
//   }
// }
export function* getAllEquipmentSaga() {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(getAllEquipment);

    yield toast({ message: "Lấy danh sách trang thiết bị thành công" });
    const equipments = results.data;
    console.log(equipments);
    yield put({ type: GET_EQUIPMENT_SUCCESS, equipments });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* deleteEquipmentSaga({ equipmentID }) {
  try {
    yield put({ type: SET_LOADING });
    yield call(deleteEquipment, { equipmentID });
    yield toast({ message: "Xoá thiết bị thành công" });
    yield put({ type: DELETE_EQUIPMENT_SUCCESS, equipmentID });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}
export function* filterDevice({ devicestatusid, devicetypeid }) {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(filterDeviceService, {
      devicestatusid,
      devicetypeid
    });
    yield put({ type: FILTER_EQUIPMENT_SUCCESS, response: results.data });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* equipmentSaga() {
  // yield takeEvery(ADD_EQUIPMENT, addEquipmentSaga);
  yield takeEvery(GET_EQUIPMENT, getAllEquipmentSaga);
  yield takeEvery(DELETE_EQUIPMENT, deleteEquipmentSaga);
  yield takeEvery(FILTER_EQUIPMENT, filterDevice);
}
