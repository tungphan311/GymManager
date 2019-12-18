import { takeEvery, put, call, select } from "redux-saga/effects";
import { ADD_STAFF } from "state/reducers/staffReducer";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import { addStaff } from "services/staffServices";
import { formatDate } from "utils/utils";

export function* addStaffSaga() {
  try {
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
  }
}

export default function* staffSaga() {
  yield takeEvery(ADD_STAFF, addStaffSaga);
}
