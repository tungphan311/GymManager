import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "Components/Input/Input";
import { require, email, password } from "utils/FormValidate";
import { FORM_KEY_LOGIN } from "state/reducers/formReducer";

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field
        name="username"
        type="email"
        placeholder="Email"
        component={Input}
        validate={[require, email]}
      />
      <Field
        name="password"
        type="password"
        placeholder="Password"
        component={Input}
        validate={[require, password]}
      />
      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_LOGIN, // a unique identifier for this form
  touchOnBlur: false
})(LoginForm);
