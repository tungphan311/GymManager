import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  GET_COURSE_SUCCESS,
  GET_COURSE,
  DELETE_COURSE,
  DELETE_COURSE_SUCCESS,
  GET_CLASS,
  GET_CLASS_SUCCESS,
  ADD_COURSE,
  GET_CLASS_BY_ID_SUCCESS,
  GET_CLASS_BY_ID
} from "state/reducers/courseReducer";
import { formatDate, toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";
import {
  getAllCourse,
  deleteCourse,
  getClassesService,
  addCourse,
  getClassById
} from "services/courseServices";
import { FORM_KEY_ADDCOURSE } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";

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

export function* addCourseSaga() {
  try {
    yield put({ type: SET_LOADING });
    const {
      name,
      haspt,
      classtypeid,
      durationdays,
      price
    } = yield select(state => getFormValues(state, FORM_KEY_ADDCOURSE));

    const reqclasstypeid = parseInt(classtypeid);
    const reqhaspt = haspt === "true" ? true : false;
    const reqprice = parseFloat(price);
    const reqdurationdays = parseFloat(durationdays);
    // console.log(reqhaspt);
    // console.log(reqclasstypeid === 1);
    if (!reqhaspt && reqclasstypeid === 1) {
      console.log("aa");
      toast({
        type: "error",
        message: "Gói tập theo ngày không khả dụng với hình thức tập cá nhân"
      });
      return null;
    } else {
      const results = yield call(addCourse, {
        name,
        haspt: reqhaspt,
        classtypeid: reqclasstypeid,
        durationdaysL: reqdurationdays,
        price: reqprice
      });

      toast({ message: results.data });
      yield put(reset(FORM_KEY_ADDCOURSE));
    }
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export function* getClassByIdSaga({ id }) {
  try {
    const results = yield call(getClassById, { id });

    yield put({ type: GET_CLASS_BY_ID_SUCCESS, results });
  } catch (error) {
    toastErr(error);
  }
}

export default function* courseSaga() {
  yield takeEvery(GET_COURSE, getAllCourseSaga);
  yield takeEvery(DELETE_COURSE, deleteCourseSaga);
  yield takeEvery(GET_CLASS, getClassesSaga);
  yield takeEvery(ADD_COURSE, addCourseSaga);
  yield takeEvery(GET_CLASS_BY_ID, getClassByIdSaga);
}
