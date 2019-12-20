import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  GET_COURSE_SUCCESS,
  GET_COURSE,
  DELETE_COURSE,
  DELETE_COURSE_SUCCESS,
  GET_CLASS,
  GET_CLASS_SUCCESS,
  BUY_CLASS,
  BUY_CLASS_SUCCESS
} from "state/reducers/courseReducer";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";
import {
  getAllCourse,
  deleteCourse,
  getClassesService,
  buyClasses
} from "services/courseServices";
import { getStaffId } from "state/selectors/index";
import { getClassIdSelector } from "state/selectors/modalSelector";
import { TOGGLE_MODAL } from "state/reducers/modalReducer";

export function* getAllCourseSaga() {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(getAllCourse);

    yield toast({ message: "Lấy danh sách gói tập thành công" });
    const courses = results.data;
    yield put({ type: GET_COURSE_SUCCESS, courses });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* deleteCourseSaga({ courseID }) {
  try {
    yield put({ type: SET_LOADING });
    yield call(deleteCourse, { courseID });
    yield toast({ message: "Xoá gói tập thành công" });
    yield put({ type: DELETE_COURSE_SUCCESS, courseID });
  } catch (err) {
    toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* getClassesSaga({ id, haspt }) {
  try {
    yield put({ type: SET_LOADING });

    const result = yield call(getClassesService, { id, haspt });

    yield put({ type: GET_CLASS_SUCCESS, payload: result.data, id, haspt });
  } catch (err) {
    yield toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* buyClassesSaga({ memberid }) {
  try {
    yield put({ type: SET_LOADING });

    const staffid = yield select(state => getStaffId(state));

    const classid = yield select(state => getClassIdSelector(state));

    const result = yield call(buyClasses, { classid, memberid, staffid });

    yield put({ type: BUY_CLASS_SUCCESS });

    yield toast({ message: "Đăng ký gói tập thành công" });

    yield put({ type: TOGGLE_MODAL });
  } catch (err) {
    yield toastErr(err);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* courseSaga() {
  yield takeEvery(GET_COURSE, getAllCourseSaga);
  yield takeEvery(DELETE_COURSE, deleteCourseSaga);
  yield takeEvery(GET_CLASS, getClassesSaga);
  yield takeEvery(BUY_CLASS, buyClassesSaga);
}
