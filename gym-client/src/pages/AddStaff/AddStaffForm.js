import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import "./AddStaffForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import DatePicker from "Components/DatePicker/DatePicker";

function AddStaffForm({ handleSubmit }) {
  const [startDate, setStartDate] = useState(null);
  return (
    <form className="addStaffForm" onSubmit={handleSubmit} noValidate>
      <div className="container">
        <Field
          name="Name"
          placeholder="Name"
          component={Input}
          //   validate={[require, email]}
        />

        <DatePicker date={startDate} setDate={setStartDate} />
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_ADDSTAFF, // a unique identifier for this form
  touchOnBlur: false
})(AddStaffForm);
