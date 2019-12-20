import { combineReducers } from "redux";
import { authReducer } from "state/reducers/authReducer";
import { formReducer } from "state/reducers/formReducer";
import { staffReducer } from "state/reducers/staffReducer";
import { loadingReducer } from "state/reducers/loadingReducer";
import { memberReducer } from "state/reducers/memberReducer";
import { equipmentReducer } from "state/reducers/equipmentReducer";
import { courseReducer } from "state/reducers/courseReducer";
import { modalReducer } from "state/reducers/modalReducer";
import { billReducer } from "state/reducers/billReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  staff: staffReducer,
  loading: loadingReducer,
  member: memberReducer,
  equipment: equipmentReducer,
  course: courseReducer,
  modal: modalReducer,
  bill: billReducer
});
