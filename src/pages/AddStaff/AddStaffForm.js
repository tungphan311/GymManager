import { GENDERS, ROLE, TYPE } from "constants/index";
import React, { Component } from "react";
import { Field, reduxForm, change } from "redux-form";
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
  email,
  requireSelect
} from "utils/FormValidate";
import { connect } from "react-redux";
import { getStaffNameSelector } from "state/selectors/index";
import { phoneNumber } from "utils/validate";

class AddStaffForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      init: false
    };
  }

  isEmpty = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  render() {
    const { handleSubmit, staffdata, initialize, type, history } = this.props;

    console.log(history);

    if (type === "edit") {
      const { init } = this.state;

      if (this.isEmpty(staffdata)) return null;

      if (!init && !this.isEmpty(staffdata)) {
        this.setState({ init: true }, () => {
          const {
            FullName,
            BirthDate,
            Address,
            Phone,
            Gender,
            Email,
            BeginDay,
            RoleID,
            StaffTypeID
          } = staffdata;

          const dob = new Date(BirthDate);
          const bgd = new Date(BeginDay);

          initialize({
            fullname: FullName,
            phone: Phone,
            address: Address,
            gender: Gender,
            email: Email,
            roleid: RoleID,
            stafftypeid: StaffTypeID,
            beginday: bgd,
            birthdate: dob
          });
        });
      }
    }

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
              validate={requireSelect}
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
              validate={requireSelect}
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
            <button
              type="button"
              onClick={() => history.goBack()}
              className="groupBtn btn btn-primary btn-border"
            >
              Trở về
            </button>
            <button type="submit" className="groupBtn btn btn-primary mr-0">
              Câp nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}

AddStaffForm = reduxForm({
  form: FORM_KEY_ADDSTAFF, // a unique identifier for this form
  touchOnBlur: false
})(AddStaffForm);

export default connect(state => ({
  initialValues: {
    fullname: getStaffNameSelector(state)
  }
}))(AddStaffForm);
