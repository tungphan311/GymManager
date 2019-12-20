import { GENDERS } from "constants/index";
import React, { Component } from "react";
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
  email,
  idValid
} from "utils/FormValidate";
import { connect } from "react-redux";
import { getMemberNameSelector } from "state/selectors/memberSelector";

class AddMemberForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultF: ""
    };
  }

  componentDidUpdate = () => {
    if (this.props.type === "edit") {
      const {
        initialize,
        memberdata: {
          FullName,
          BirthDate,
          Address,
          Phone,
          Gender,
          Email,
          IdentityCard,
          StaffID,
          StaffTypeID
        }
      } = this.props;
      const { defaultF } = this.state;
      const dob = new Date(BirthDate);

      if (!defaultF && FullName) {
        initialize({
          fullname: FullName,
          phone: Phone,
          address: Address,
          gender: Gender,
          email: Email,
          identitycard: IdentityCard,
          birthdate: dob
        });

        this.setState({ defaultF: FullName });
      }
    }
  };

  render() {
    const { handleSubmit, type } = this.props;

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
              // validate={[require, validD]}
            />
            <Field
              label="Giới tính: *"
              name="gender"
              component={Select}
              selectlist={GENDERS}
              validate={require}
            />
          </div>
          <div className="displayRow">
            <Field
              label="Số CMND: *"
              name="identitycard"
              placeholder="Số CMND"
              component={Input}
              validate={[require, idValid]}
            />
            <Field
              label="Email: "
              name="email"
              placeholder="Email"
              component={Input}
              validate={email}
            />
          </div>
          <Field
            label="Địa chỉ: *"
            name="address"
            placeholder="Địa chỉ"
            component={Input}
            validate={require}
          />
          <div className="group">
            <button
              type="button"
              className="groupBtn btn btn-primary btn-border"
            >
              Trở về
            </button>
            <button type="submit" className="groupBtn btn btn-primary mr-0">
              {type === "edit" ? "Cập nhật hội viên" : "Thêm hội viên"}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

AddMemberForm = reduxForm({
  form: FORM_KEY_ADDMEMBER, // a unique identifier for this form
  touchOnBlur: false
})(AddMemberForm);

export default connect(state => ({
  initialValues: {
    fullname: getMemberNameSelector(state)
  }
}))(AddMemberForm);
