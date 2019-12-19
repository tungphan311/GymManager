import { combineReducers } from "redux";
import { authReducer } from "state/reducers/authReducer";
import { formReducer } from "state/reducers/formReducer";
import { staffReducer } from "state/reducers/staffReducer";
import { loadingReducer } from "state/reducers/loadingReducer";
import { memberReducer } from "state/reducers/memberReducer";
import { classReducer } from "state/reducers/classReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  staff: staffReducer,
  loading: loadingReducer,
  member: memberReducer,
  class: classReducer
});
