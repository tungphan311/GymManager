import { COURSETYPE, HASPT } from "constants/index";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./AddCourseForm.scss";
import { FORM_KEY_ADDCOURSE } from "state/reducers/formReducer";
import Input from "Components/Input/Input";
import Select from "Components/Select/Select";
import {
  require,
  validName,
  validClassType
  // validPhone,
  // validD,
  // email
} from "utils/FormValidate";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getCourseNameSelector } from "state/selectors/courseSelector";
import InputWithLabel from "Components/InputWithLabel/InputWithLabel";

class AddCourseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultF: ""
    };
  }
  componentDidUpdate = () => {
    if (this.props.type === "edit") {
      // console.log(this.props);
      const {
        initialize,
        coursedata: { Name, Haspt, ClassTypeID, DurationDays, Price }
      } = this.props;
      const { defaultF } = this.state;

      if (!defaultF && Name) {
        initialize({
          name: Name,
          haspt: Haspt,
          typeid: ClassTypeID,
          durationdays: DurationDays,
          price: Price
        });

        this.setState({ defaultF: Name });
      }
    }
  };
  render() {
    const { handleSubmit, type, history } = this.props;
    return (
      <form className="addCourseForm" onSubmit={handleSubmit} noValidate>
        <div className="container">
          <div className="displayRow">
            <Field
              label="Tên gói tập: *"
              name="name"
              placeholder="Tên gói tập"
              component={Input}
              validate={[require]}
            />
            <Field
              label="Hình thức tập: *"
              name="haspt"
              component={Select}
              selectlist={HASPT}
            />
          </div>
          <div className="displayRow">
            <Field
              label="Loại gói tập: *"
              name="classtypeid"
              component={Select}
              selectlist={COURSETYPE}
              validate={[require]}
            />
            <Field
              label="Hạn khóa học: *"
              name="durationdays"
              component={Input}
              validate={require}
            />
          </div>
          <div className="displayRow">
            <Field
              label="Trị giá: *"
              name="price"
              placeholder="Trị giá"
              component={InputWithLabel}
              validate={[require]}
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
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}

AddCourseForm = reduxForm({
  form: FORM_KEY_ADDCOURSE, // a unique identifier for this form
  touchOnBlur: false
})(AddCourseForm);

export default connect(state => ({
  initialValues: {
    name: getCourseNameSelector(state)
  }
}))(AddCourseForm);
