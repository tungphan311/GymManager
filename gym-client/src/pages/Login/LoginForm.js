import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "Components/Input/Input";
import {
  validEmail,
  required,
  alphaNumeric,
  maxLength15,
  minLength6
} from "utils/validate";

function LoginForm() {
  return (
    <form>
      <Field
        name="email"
        type="email"
        label="Email"
        component={Input}
        validate={[required, validEmail]}
        warn={alphaNumeric}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={Input}
        validate={[required, maxLength15, minLength6]}
        warn={alphaNumeric}
      />
      <div class="form-group">
        <button class="btn btn-primary btn-block" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "loginForm" // a unique identifier for this form
})(LoginForm);
