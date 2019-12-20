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
    <div className="inputwlabel__container">
      <label className={`${!label ? "d-none" : "inputwlabel__label"}`}>
        {label}
      </label>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={`inputwlabel__field ${className}`}
          type={type}
        />

        <div>{showError && <span className="error">{errCode}</span>}</div>
      </div>
    </div>
  );
};

export default InputWithLabel;
