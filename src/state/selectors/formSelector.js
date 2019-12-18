import { getFormValues as getReduxFormValues } from "redux-form";

export const getFormValues = (state, formName) =>
  getReduxFormValues(formName)(state);
