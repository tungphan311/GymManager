import React from "react";
import "./TextArea.scss";

const TextArea = ({
  placeholder = "",
  className = "",
  label = "",
  type = "text",
  meta = {}, // redux form
  input // redux form
}) => {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className="text__container">
      <label className={`${!label ? "d-none" : "text__label"}`}>{label}</label>
      <div>
        <textarea
          rows={5}
          {...input}
          placeholder={placeholder}
          className={`text__field ${className}`}
          type={type}
        />
        {showError && <span className="error">{errCode}</span>}
      </div>
    </div>
  );
};

export default TextArea;
