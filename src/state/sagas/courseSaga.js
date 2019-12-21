import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  GET_COURSE_SUCCESS,
  GET_COURSE,
  DELETE_COURSE,
  DELETE_COURSE_SUCCESS,
  GET_CLASS,
  GET_CLASS_SUCCESS,
  BUY_CLASS,
  GET_TOP_CLASSES,
  GET_TOP_CLASSES_SUCCESS,
  GET_DASHBOARD,
  ADD_COURSE,
  GET_CLASS_BY_ID_SUCCESS,
  GET_CLASS_BY_ID,
  EDIT_COURSE
} from "state/reducers/courseReducer";
import { toast, toastErr } from "utils/utils";
import { SET_LOADING } from "state/reducers/loadingReducer";
import { reset } from "redux-form";
import {
  getAllCourse,
  deleteCourse,
  getClassesService,
  buyClasses,
  getTopClassesService,
  addCourse,
  getClassById,
  editCourse
} from "services/courseServices";
import { getStaffId } from "state/selectors/index";
import { getClassIdSelector } from "state/selectors/modalSelector";
import { TOGGLE_MODAL } from "state/reducers/modalReducer";
import { getRecentMemberService } from "services/memberServices";
import { GET_MEMBER_RECENTLY } from "state/reducers/memberReducer";
import { getDashboard } from "services/billServices";
import { FORM_KEY_ADDCOURSE } from "state/reducers/formReducer";
import { getFormValues } from "state/selectors/index";
import history from "state/history";

export function* getAllCourseSaga() {
  try {
    yield put({ type: SET_LOADING });
    const results = yield call(getAllCourse);

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

    yield call(buyClasses, { classid, memberid, staffid });

    yield toast({ message: "Đăng ký gói tập thành công" });

    yield put({ type: TOGGLE_MODAL });
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

    if (!reqhaspt && reqclasstypeid === 1) {
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

export function* getTopClassSaga() {
  try {
    const result = yield call(getTopClassesService);

    yield put({ type: GET_TOP_CLASSES_SUCCESS, payload: result.data });

    const recent = yield call(getRecentMemberService);

    yield put({ type: GET_MEMBER_RECENTLY, payload: recent.data });

    const dashboard = yield call(getDashboard);

    yield put({ type: GET_DASHBOARD, payload: dashboard.data });
  } catch (err) {
    yield toastErr(err);
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

export function* editCourseSaga({ id }) {
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
    if (!reqhaspt && reqclasstypeid === 1) {
      toast({
        type: "error",
        message: "Gói tập theo ngày không khả dụng với hình thức tập cá nhân"
      });
      return null;
    } else {
      const results = yield call(editCourse, {
        name,
        haspt: reqhaspt,
        classtypeid: reqclasstypeid,
        durationdays: reqdurationdays,
        price: reqprice,
        id
      });
      toast({ message: results.data });
    }
    history.push("/courses");
  } catch (error) {
    toastErr(error);
  } finally {
    yield put({ type: SET_LOADING, status: false });
  }
}

export default function* courseSaga() {
  yield takeEvery(GET_COURSE, getAllCourseSaga);
  yield takeEvery(DELETE_COURSE, deleteCourseSaga);
  yield takeEvery(GET_CLASS, getClassesSaga);
  yield takeEvery(BUY_CLASS, buyClassesSaga);
  yield takeEvery(GET_TOP_CLASSES, getTopClassSaga);
  yield takeEvery(ADD_COURSE, addCourseSaga);
  yield takeEvery(GET_CLASS_BY_ID, getClassByIdSaga);
  yield takeEvery(EDIT_COURSE, editCourseSaga);
}
