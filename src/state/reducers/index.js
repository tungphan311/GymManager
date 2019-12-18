import { combineReducers } from "redux";
import { authReducer } from "state/reducers/authReducer";
import { formReducer } from "state/reducers/formReducer";
import { staffReducer } from "state/reducers/staffReducer";
import { loadingReducer } from "state/reducers/loadingReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  staff: staffReducer,
  loading: loadingReducer
});
