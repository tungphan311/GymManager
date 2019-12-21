import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "Components/DatePicker/DatePicker";
import { FORM_KEY_DASHBOARD } from "state/reducers/formReducer";
import Select from "Components/Select/Select";

function DashboardForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate className="col-12">
      <div className="row filter">
        <div className="col-3">
          <Field
            label="Từ ngày"
            placeholder="Từ ngày"
            name="from"
            component={DatePicker}
          />
        </div>
        <div className="col-3">
          <Field
            label="Đến ngày"
            placeholder="Đến ngày"
            name="to"
            component={DatePicker}
          />
        </div>
        <div className="col-3">
          <Field component={Select} selectlist={FILTER} name="type" />
        </div>
        <div className="col-3">
          <button
            type="submit"
            className="btn btn-md btn-primary"
            style={{ width: "100%" }}
          >
            Áp dụng
          </button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_DASHBOARD,
  touchOnBlur: false
})(DashboardForm);

const FILTER = [
  { value: "day", label: "Theo ngày" },
  { value: "week", label: "Theo tuần" },
  { value: "month", label: "Theo tháng" }
];
