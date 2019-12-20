import React from "react";
import "./InputWithLabel.scss";

const InputWithLabel = ({
  placeholder = "",
  className = "",
  label = "",
  hoang = "",
  type = "text",
  meta = {}, // redux form
  input // redux form
}) => {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className="inputlabel__container">
      <label className={`${!label ? "d-none" : "input__label"}`}>{label}</label>
      <div>
        <div className="input-group mb-3">
          <input
            {...input}
            placeholder={placeholder}
            className="form-control"
            type={type}
          />
          <div className="input-group-append">
            <span className="input-group-text">VNĐ</span>
          </div>
        </div>

        <div>{showError && <span className="error">{errCode}</span>}</div>
      </div>
    </div>
  );
};

export default InputWithLabel;
