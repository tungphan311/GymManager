import { combineReducers } from "redux";
import { authReducer } from "state/reducers/authReducer";
import { formReducer } from "state/reducers/formReducer";
import { staffReducer } from "state/reducers/staffReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  staff: staffReducer
});
