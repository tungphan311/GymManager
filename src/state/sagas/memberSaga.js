import { takeEvery, put, call, select } from "redux-saga/effects";
import { ADD_MEMBER, ADD_MEMBER_SUCCESS } from "state/reducers/memberReducer";
import { FORM_KEY_ADDMEMBER } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import { addMember } from "services/memberServices";
import { formatDate, toast } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";

export function* addMemberSaga() {
  try {
    yield put({ type: SET_LOADING });
    const {
      fullname,
      phone,
      gender,
      address,
      roleid,
      membertypeid,
      email,
      beginday,
      birthdate
    } = yield select(state => getFormValues(state, FORM_KEY_ADDMEMBER));

    const reqGender = parseInt(gender);
    const reqRoleid = parseInt(roleid);
    const reqmembertypei = parseInt(membertypeid);

    const reqBirthdate = formatDate(birthdate);
    const reqBeginday = formatDate(beginday);

    const results = yield call(addMember, {
      fullname,
      phone,
      roleid: reqRoleid,
      address,
      gender: reqGender,
      membertypeid: reqmembertypei,
      email,
      beginday: reqBeginday,
      birthdate: reqBirthdate
    });
    toast({ message: results.data });
    yield put({ type: ADD_MEMBER_SUCCESS });
    yield put(reset(FORM_KEY_ADDMEMBER));
  } catch (error) {
    console.log(error);
    // toast({ type: "error", message: error.r });
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* memberSaga() {
  yield takeEvery(ADD_MEMBER, addMemberSaga);
}
