import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  ADD_STAFF,
  ADD_STAFF_SUCCESS,
  GET_MENTOR
} from "state/reducers/staffReducer";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import { addStaff, getMentor } from "services/staffServices";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";

export function* addStaffSaga() {
  try {
    yield put({ type: SET_LOADING });
    const {
      fullname,
      phone,
      gender,
      address,
      roleid,
      stafftypeid,
      email,
      beginday,
      birthdate
    } = yield select(state => getFormValues(state, FORM_KEY_ADDSTAFF));

    const reqGender = parseInt(gender);
    const reqRoleid = parseInt(roleid);
    const reqstafftypei = parseInt(stafftypeid);

    const reqBirthdate = formatDate(birthdate);
    const reqBeginday = formatDate(beginday);

    const results = yield call(addStaff, {
      fullname,
      phone,
      roleid: reqRoleid,
      address,
      gender: reqGender,
      stafftypeid: reqstafftypei,
      email,
      beginday: reqBeginday,
      birthdate: reqBirthdate
    });
    toast({ message: results.data });
    yield put({ type: ADD_STAFF_SUCCESS });
    yield put(reset(FORM_KEY_ADDSTAFF));
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}
export function* getMentorSaga() {
  try {
    const results = yield call(getMentor, {
      roleid: 1
    });
    console.log(results.data);
  } catch (error) {}
}

export default function* staffSaga() {
  yield takeEvery(ADD_STAFF, addStaffSaga);
  yield takeEvery(GET_MENTOR, getMentorSaga);
}
