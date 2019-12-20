import React, { Component } from "react";
import ReactSelect from "react-select";
import "./SelectWithInput.scss";

class SelectWithInput extends Component {
  render() {
    const {
      selectedOption,
      options,
      onChange,
      className,
      disabled,
      onFocus,
      onBlur,
      name,
      defaultValue
    } = this.props;

    return (
      <div className={`hara__dropdown ${className}`}>
        <ReactSelect
          name={name}
          options={options}
          classNamePrefix="hara__select"
          defaultValue={defaultValue}
          value={selectedOption}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          isDisabled={disabled}
          menuPosition="fixed"
        />
      </div>
    );
  }
}

export default SelectWithInput;
