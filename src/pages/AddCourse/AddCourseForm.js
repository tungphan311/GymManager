import { COURSETYPE } from "constants/index";
import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddCourseForm.scss";
import { FORM_KEY_ADDCOURSE } from "state/reducers/formReducer";
import Input from "Components/Input/Input";
import Select from "Components/Select/Select";
import {
  require,
  validName,
  validPhone,
  validD,
  email
} from "utils/FormValidate";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getTrainers } from "state/selectors/trainerSelector";

const mapStateToProps = state => ({
  trainer: getTrainers(state)
});

function AddCourseForm({ handleSubmit, trainer }) {
  return (
    <form className="addStaffForm" onSubmit={handleSubmit} noValidate>
      <div className="container">
        <div className="displayRow">
          <Field
            label="Tên gói tập: *"
            name="fullname"
            placeholder="Tên gói tập"
            component={Input}
            validate={[require, validName]}
          />
          <Field
            label="Huấn luyện viên: *"
            name="gender"
            component={Select}
            selectlist={trainer}
            validate={require}
          />
        </div>
        <div className="displayRow">
          <Field
            label="Loại gói tập: *"
            name="gender"
            component={Select}
            selectlist={COURSETYPE}
            validate={require}
          />
          <Field
            label="Hạn khóa học: *"
            name="gender"
            component={Select}
            // selectlist={GENDERS}
            validate={require}
          />
        </div>
        <div className="displayRow">
          <Field
            label="Trị giá: *"
            name="fullname"
            placeholder="Trị giá"
            component={Input}
            validate={[require, validName]}
          />
          <Field
            label="Thời khóa biểu: *"
            name="gender"
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
            Thêm gói tập
          </button>
        </div>
      </div>
    </form>
  );
}

export default compose(
  reduxForm({
    form: FORM_KEY_ADDCOURSE, // a unique identifier for this form
    touchOnBlur: false
  }),
  connect(mapStateToProps, null)
)(AddCourseForm);