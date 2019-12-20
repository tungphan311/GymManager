import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddEquipmentForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDEQUIPMENT } from "state/reducers/formReducer";
import Select from "Components/Select/Select";

import { require } from "utils/FormValidate";
import TextArea from "Components/TextArea/TextArea";

function AddEquipmentForm({ handleSubmit }) {
  return (
    <form className="addEquipmentForm" onSubmit={handleSubmit} noValidate>
      <div className="container">
        <div className="displayRow">
          <Field
            label="Mã thiết bị: *"
            name="EqID"
            placeholder="Mã thiết bị"
            component={Input}
            validate={require}
          />
          <Field
            label="Tên thiết bị: *"
            name="EqName"
            placeholder="Tên thiết bị"
            component={Input}
            validate={require}
          />
        </div>
        <div className="displayRow">
          <Field
            label="Loại thiết bị: *"
            name="gender"
            component={Select}
            // selectlist={GENDERS}
            validate={require}
          />
          <Field
            label="Tình trạng: *"
            name="gender"
            component={Select}
            // selectlist={GENDERS}
            validate={require}
          />
        </div>
        <Field
          label="Mô tả: *"
          name="descripe"
          component={TextArea}
          validate={require}
        />
        <Field label="Ghi chú:" name="note" component={TextArea} />
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
  form: FORM_KEY_ADDEQUIPMENT, // a unique identifier for this form
  touchOnBlur: false
})(AddEquipmentForm);
