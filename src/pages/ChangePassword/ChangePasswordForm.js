import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "Components/Input/Input";
import { require, password } from "utils/FormValidate";
import { FORM_KEY_CHANGE_PASSWORD } from "state/reducers/formReducer";

function changePassword({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field
        name="password"
        type="password"
        placeholder="Password"
        component={Input}
        validate={[require, password]}
      />
      <Field
        name="password_confirm"
        type="password"
        placeholder="Confirm your passord"
        component={Input}
        validate={[require, password]}
      />
      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">
          Change Password
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_CHANGE_PASSWORD, // a unique identifier for this form
  touchOnBlur: false
})(changePassword);
