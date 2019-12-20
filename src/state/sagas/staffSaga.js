import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  ADD_STAFF,
  ADD_STAFF_SUCCESS,
  GET_MENTOR,
  GET_STAFF,
  GET_STAFF_SUCCESS,
  DELETE_STAFF,
  DELETE_STAFF_SUCCESS,
  FILTER_STAFF,
  FILTER_STAFF_SUCCESS,
  EDIT_STAFF,
  EDIT_STAFF_SUCCESS,
  GET_STAFF_BY_ID,
  GET_STAFF_BY_ID_SUCCESS
} from "state/reducers/staffReducer";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import {
  addStaff,
  getMentor,
  getAllStaff,
  deleteStaff,
  filterStaff,
  getStaff,
  editStaff
} from "services/staffServices";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";
import history from "state/history";

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

export function* getStaffSaga({ id }) {
  try {
    const results = yield call(getStaff, { id });

    yield put({ type: GET_STAFF_BY_ID_SUCCESS, results });
  } catch (error) {
    toastErr(error);
  }
}

export function* getMentorSaga() {
  try {
    const results = yield call(getMentor, {
      roleid: 1
    });
  } catch (error) {
    toastErr(error);
  }
}

export function* editStaffSaga({ id }) {
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
    console.log(id);
    const reqGender = parseInt(gender);
    const reqRoleid = parseInt(roleid);
    const reqstafftypei = parseInt(stafftypeid);

    const reqBirthdate = formatDate(birthdate);
    const reqBeginday = formatDate(beginday);

    const results = yield call(editStaff, {
      fullname,
      phone,
      roleid: reqRoleid,
      address,
      gender: reqGender,
      stafftypeid: reqstafftypei,
      email,
      beginday: reqBeginday,
      birthdate: reqBirthdate,
      id
    });
    toast({ message: results.data });
    history.push("/staffs");
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}
export function* getAllStaffSaga() {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(getAllStaff);

    yield toast({ message: "Lấy danh sách nhân viên thành công" });
    const staffs = results.data;
    yield put({ type: GET_STAFF_SUCCESS, staffs });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* deleteStaffSaga({ staffID }) {
  try {
    yield put({ type: SET_LOADING });
    yield call(deleteStaff, { staffID });
    yield toast({ message: "Xoá nhân viên thành công" });
    yield put({ type: DELETE_STAFF_SUCCESS, staffID });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* filterStaffs({ gender, roleid, stafftypeid }) {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(filterStaff, { gender, roleid, stafftypeid });
    yield put({ type: FILTER_STAFF_SUCCESS, response: results.data });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* staffSaga() {
  yield takeEvery(ADD_STAFF, addStaffSaga);
  yield takeEvery(GET_STAFF, getAllStaffSaga);
  yield takeEvery(GET_MENTOR, getMentorSaga);
  yield takeEvery(DELETE_STAFF, deleteStaffSaga);
  yield takeEvery(FILTER_STAFF, filterStaffs);
  yield takeEvery(GET_STAFF_BY_ID, getStaffSaga);
  yield takeEvery(EDIT_STAFF, editStaffSaga);
}
