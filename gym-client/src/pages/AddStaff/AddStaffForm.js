import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import "./AddStaffForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import Select from "Components/Select/Select";
import DatePicker from "Components/DatePicker/DatePicker";
import moment from "moment";
// import { getFormValues } from "state/selectors/formSelector";
// import { checkServerIdentity } from "tls";
// import store from "./../../state/store";

export const AddStaffForm = ({ handleSubmit }) => {
  const today = new moment();
  const [startDate, setStartDate] = useState(today);
  // const submitForm = ({ event, formValues }) => {
  //   console.log("submitting Form: ", formValues);
  //   event.preventDefault();
  // };
  function onSubmit(e, props) {
    // console.log(getFormValues("form/FORM_KEY_ADDSTAFF"));
    e.preventDefault();
  }

  return (
    <form
      className="addStaffForm"
      onSubmit={(e, props) => onSubmit(e, props)}
      noValidate
    >
      <div className="container">
        <div className="displayRow">
          <Field
            label="Họ và tên: *"
            name="name"
            placeholder="Họ và tên"
            component={Input}
          />
          <Field
            label="Số điện thoại: *"
            name="phoneNumber"
            placeholder="Số điện thoại"
            component={Input}
            //   validate={[require, email]}
          />
        </div>

        <div className="displayRow">
          <Field
            label="Ngày sinh: *"
            name="dateOfBirth"
            component={DatePicker}
            date={startDate}
            setDate={setStartDate}
          />
          <Field
            label="Giới tính: *"
            name="gender"
            component={Select}
            selectlist={["Female", "Male", "Other"]}
          />
        </div>
        <Field
          label="Địa chỉ: *"
          name="address"
          placeholder="Địa chỉ: *"
          component={Input}
        />
        <div className="displayRow">
          <Field
            label="Email: *"
            name="email"
            placeholder="Email"
            component={Input}
          />
          <Field
            label="Số CMND: *"
            name="ID"
            placeholder="Số CMND"
            component={Input}
          />
        </div>
        <div className="displayRow">
          <Field
            label="Ngày vào làm: *"
            name="dateStart"
            component={DatePicker}
            date={startDate}
            setDate={setStartDate}
          />
          <Field
            label="Loại nhân viên: *"
            name="role"
            component={Select}
            selectlist={["Manager", "Trainer", "Staff"]}
          />
        </div>
        {/* <DatePicker  date={startDate} setDate={setStartDate} /> */}
        <div className="group">
          <button type="button" className="groupBtn btn-lg">
            Trở về
          </button>
          <button type="submit" className="groupBtn btn-success btn-lg mr-0">
            Thêm nhân viên
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: FORM_KEY_ADDSTAFF, // a unique identifier for this form
  touchOnBlur: false
})(AddStaffForm);
