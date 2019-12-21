import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  ADD_MEMBER,
  ADD_MEMBER_SUCCESS,
  GET_MEMBER,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_BY_ID,
  GET_MEMBER_BY_ID_SUCCESS,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER,
  EDIT_MEMBER
} from "state/reducers/memberReducer";
import { FORM_KEY_ADDMEMBER } from "state/reducers/formReducer";
import {
  addMember,
  getMemberService,
  getMember,
  deleteMember,
  editMember
} from "services/memberServices";

import { getFormValues, getStaffId } from "state/selectors/index";

import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";
import history from "state/history";

export function* addMemberSaga() {
  try {
    yield put({ type: SET_LOADING });
    const {
      fullname,
      phone,
      gender,
      address,
      identitycard,
      email,
      birthdate
    } = yield select(state => getFormValues(state, FORM_KEY_ADDMEMBER));

    const reqGender = parseInt(gender);

    const reqBirthdate = formatDate(birthdate);
    const staffid = getStaffId();
    const results = yield call(addMember, {
      fullname,
      phone,
      address,
      gender: reqGender,
      identitycard,
      email,
      staffid,
      birthdate: reqBirthdate
    });
    toast({ message: results.data });
    yield put({ type: ADD_MEMBER_SUCCESS });
    yield put(reset(FORM_KEY_ADDMEMBER));
  } catch (error) {
    yield toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* getMemberSaga() {
  try {
    const result = yield call(getMemberService);

    yield put({ type: GET_MEMBER_SUCCESS, payload: result.data });
  } catch (error) {
    yield toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* getMemberByIdSaga({ id }) {
  try {
    const results = yield call(getMember, { id });

    yield put({ type: GET_MEMBER_BY_ID_SUCCESS, results });
  } catch (error) {
    toastErr(error);
  }
}

export function* deleteMemberSaga({ memberID }) {
  try {
    yield put({ type: SET_LOADING });

    yield call(deleteMember, { memberID });

    yield toast({ message: "Xoá hội viên thành công" });

    yield put({ type: DELETE_MEMBER_SUCCESS, memberID });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* editMemberSaga({ id }) {
  try {
    yield put({ type: SET_LOADING });
    const {
      fullname,
      phone,
      gender,
      address,
      email,
      identitycard,
      birthdate
    } = yield select(state => getFormValues(state, FORM_KEY_ADDMEMBER));
    const reqGender = parseInt(gender);

    const reqBirthdate = formatDate(birthdate);
    const staffidNew = getStaffId();

    const results = yield call(editMember, {
      fullname,
      phone,
      gender: reqGender,
      address,
      email,
      identitycard,
      staffidNew,
      birthdate: reqBirthdate,
      id
    });
    toast({ message: results.data });
    history.push("/members");
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* memberSaga() {
  yield takeEvery(ADD_MEMBER, addMemberSaga);
  yield takeEvery(GET_MEMBER, getMemberSaga);
  yield takeEvery(GET_MEMBER_BY_ID, getMemberByIdSaga);
  yield takeEvery(DELETE_MEMBER, deleteMemberSaga);
  yield takeEvery(EDIT_MEMBER, editMemberSaga);
}
