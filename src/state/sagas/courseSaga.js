import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  GET_COURSE_SUCCESS,
  GET_COURSE,
  DELETE_COURSE,
  DELETE_COURSE_SUCCESS
} from "state/reducers/courseReducer";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";
import { getAllCourse, deleteCourse } from "services/courseServices";

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

export default function* courseSaga() {
  yield takeEvery(GET_COURSE, getAllCourseSaga);
  yield takeEvery(DELETE_COURSE, deleteCourseSaga);
}
