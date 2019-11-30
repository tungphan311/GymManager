import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "Components/Input/Input";
import { require, email } from "utils/FormValidate";
import { FORM_KEY_FORGOT_PASSWORD } from "state/reducers/formReducer";

function ForgotPassWordForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field
        name="email"
        type="email"
        placeholder="Email"
        component={Input}
        validate={[require, email]}
      />
      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">
          Reset My Password
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_FORGOT_PASSWORD, // a unique identifier for this form
  touchOnBlur: false
})(ForgotPassWordForm);
