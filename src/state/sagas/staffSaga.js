import { takeEvery, put, call, select } from "redux-saga/effects";
import { ADD_STAFF } from "state/reducers/staffReducer";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import { addStaff } from "services/staffServices";
import { formatDate } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";

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
    console.log(results);
  } catch (error) {
    console.log(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* staffSaga() {
  yield takeEvery(ADD_STAFF, addStaffSaga);
}
