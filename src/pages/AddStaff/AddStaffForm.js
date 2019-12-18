import { GENDERS, ROLE, TYPE } from "constants/index";
import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddStaffForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import Select from "Components/Select/Select";
import DatePicker from "Components/DatePicker/DatePicker";
import {
  require,
  validName,
  validPhone,
  validD,
  email
} from "utils/FormValidate";

function AddStaffForm({ handleSubmit }) {
  return (
    <form className="addStaffForm" onSubmit={handleSubmit} noValidate>
      <div className="container">
        <div className="displayRow">
          <Field
            label="Họ và tên: *"
            name="fullname"
            placeholder="Họ và tên"
            component={Input}
            validate={[require, validName]}
          />
          <Field
            label="Số điện thoại: *"
            name="phone"
            placeholder="Số điện thoại"
            component={Input}
            validate={[require, validPhone]}
          />
        </div>

        <div className="displayRow">
          <Field
            label="Ngày sinh: *"
            placeholder="Chọn ngày sinh"
            name="birthdate"
            component={DatePicker}
            validate={[require, validD]}
          />
          <Field
            label="Giới tính: *"
            name="gender"
            component={Select}
            selectlist={GENDERS}
            validate={require}
          />
        </div>
        <Field
          label="Địa chỉ: *"
          name="address"
          placeholder="Địa chỉ:"
          component={Input}
          validate={require}
        />
        <div className="displayRow">
          <Field
            label="Email: *"
            name="email"
            placeholder="Email"
            component={Input}
            validate={[require, email]}
          />
          <Field
            label="Vai trò: *"
            name="roleid"
            component={Select}
            selectlist={ROLE}
            validate={require}
          />
        </div>
        <div className="displayRow">
          <Field
            label="Ngày vào làm: *"
            name="beginday"
            placeholder="Chọn ngày vào làm"
            component={DatePicker}
            validate={require}
          />
          <Field
            label="Loại nhân viên: *"
            name="stafftypeid"
            component={Select}
            selectlist={TYPE}
            validate={require}
          />
        </div>
        <div className="group">
          <button type="button" className="groupBtn btn btn-primary btn-border">
            Trở về
          </button>
          <button type="submit" className="groupBtn btn btn-primary mr-0">
            Thêm nhân viên
          </button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_ADDSTAFF, // a unique identifier for this form
  touchOnBlur: false
})(AddStaffForm);
