import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import "./AddStaffForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import Select from "Components/Select/Select";
import DatePicker from "Components/DatePicker/DatePicker";

// import { getFormValues } from "state/selectors/formSelector";
// import { checkServerIdentity } from "tls";

export const AddStaffForm = ({ handleSubmit }) => {
  const [startDate, setStartDate] = useState(new Date());
  const state = {};
  // const submitForm = ({ event, formValues }) => {
  //   console.log("submitting Form: ", formValues);
  //   event.preventDefault();
  // };
  function onSubmit(e, props) {
    e.preventDefault();
  }

  return (
    <form
      className="addStaffForm"
      onSubmit={(e, props) => onSubmit(e, props)}
      noValidate
    >
      <div className="container">
        <Field label="Name" name="name" placeholder="Name" component={Input} />
        <div className="displayRow">
          <Field
            label="Gender"
            name="gender"
            component={Select}
            selectlist={["Female", "Male", "Other"]}
          />
          <Field
            label="Date of birth"
            name="dateOfBirth"
            component={DatePicker}
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
        <button type="submit" className="btn btn-success btn-lg btn-block">
          Add Staff
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: FORM_KEY_ADDSTAFF, // a unique identifier for this form
  touchOnBlur: false
})(AddStaffForm);
