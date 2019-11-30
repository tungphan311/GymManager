import React from "react";

const Input = ({
  input,
  label,
  type = "text",
  meta: { touched, error, warning }
}) => (
  <div>
    <label className={`${!label ? "d-none" : "input__label"}`}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default Input;
