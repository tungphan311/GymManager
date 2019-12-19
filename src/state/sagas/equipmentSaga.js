import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  ADD_EQUIPMENT,
  ADD_EQUIPMENT_SUCCESS
} from "state/reducers/equipmentReducer";
import { FORM_KEY_ADDEQUIPMENT } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import { addEquipment } from "services/equipmentServices";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";

export function* addEquipmentSaga() {
  try {
    yield put({ type: SET_LOADING });
    const {
      fullname,
      phone,
      gender,
      address,
      roleid,
      equipmenttypeid,
      email,
      beginday,
      birthdate
    } = yield select(state => getFormValues(state, FORM_KEY_ADDEQUIPMENT));

    const reqGender = parseInt(gender);
    const reqRoleid = parseInt(roleid);
    const reqequipmenttypei = parseInt(equipmenttypeid);

    const reqBirthdate = formatDate(birthdate);
    const reqBeginday = formatDate(beginday);

    const results = yield call(addEquipment, {
      fullname,
      phone,
      roleid: reqRoleid,
      address,
      gender: reqGender,
      equipmenttypeid: reqequipmenttypei,
      email,
      beginday: reqBeginday,
      birthdate: reqBirthdate
    });
    toast({ message: results.data });
    yield put({ type: ADD_EQUIPMENT_SUCCESS });
    yield put(reset(FORM_KEY_ADDEQUIPMENT));
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* equipmentSaga() {
  yield takeEvery(ADD_EQUIPMENT, addEquipmentSaga);
}
