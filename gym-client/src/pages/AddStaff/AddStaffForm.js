import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import "./AddStaffForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import Select from "Components/Select/Select";
import DatePicker from "Components/DatePicker/DatePicker";
// import { checkServerIdentity } from "tls";

function AddStaffForm({ handleSubmit }) {
  const [startDate, setStartDate] = useState(null);
  return (
    <form className="addStaffForm" onSubmit={handleSubmit} noValidate>
      <div className="container">
        <Field
          label="Name"
          name="name"
          placeholder="Name"
          component={Input}
          //   validate={[require, email]}
        />
        <div className="displayRow">
          <Field
            label="Gender"
            name="gender"
            component={Select}
            selectlist={["Female", "Male", "Other"]}
          />
          <Field
            label="Date of birth"
            name="gender"
            component={DatePicker}
            date={startDate}
            setDate={setStartDate}
          />
        </div>
        <Field
          label="Address"
          name="address"
          placeholder="Address"
          component={Input}
          //   validate={[require, email]}
        />
        <Field
          label="Phone number"
          name="phoneNumber"
          placeholder="Phone number"
          component={Input}
          //   validate={[require, email]}
        />
        <div className="displayRow">
          <Field
            label="Role"
            name="role"
            component={Select}
            selectlist={["Manager", "Trainer", "Staff"]}
          />
          <Field
            label="Date start"
            name="dateStart"
            component={DatePicker}
            date={startDate}
            setDate={setStartDate}
          />
          <Field
            label="Contract valid time"
            name="validTime"
            component={Select}
            selectlist={["3 months", "6 months", "9 months"]}
          />
        </div>
        {/* <DatePicker  date={startDate} setDate={setStartDate} /> */}
        <button type="button" class="btn btn-success btn-lg btn-block">
          Add Staff
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_ADDSTAFF, // a unique identifier for this form
  touchOnBlur: false
})(AddStaffForm);
