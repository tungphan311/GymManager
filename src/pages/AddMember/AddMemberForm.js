import { GENDERS } from "constants/index";
import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddMemberForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDMEMBER } from "state/reducers/formReducer";
import Select from "Components/Select/Select";
import DatePicker from "Components/DatePicker/DatePicker";

import {
  require,
  validName,
  validPhone,
  validD,
  email,
  idValid
} from "utils/FormValidate";

function AddMemberForm({ handleSubmit }) {
  return (
    <form className="addEquipmentForm" onSubmit={handleSubmit} noValidate>
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
          placeholder="Địa chỉ"
          component={Input}
          validate={[require, validName]}
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
            label="Số CMND: *"
            name="id"
            placeholder="Số CMND"
            component={Input}
            validate={[require, idValid]}
          />
        </div>
        <div className="displayRow">
          <Field
            label="Ngày đăng ký: *"
            placeholder="Ngày đăng ký"
            name="birthdate"
            component={DatePicker}
            validate={[require, validD]}
          />
          <Field
            label="Nhân viên thực hiện: *"
            name="staff"
            component={Select}
            // selectlist={GENDERS}
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
  form: FORM_KEY_ADDMEMBER, // a unique identifier for this form
  touchOnBlur: false
})(AddMemberForm);
