import React from "react";
import PropTypes from "prop-types";
import classes from "./AppSelect.module.scss";

const AppSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={classes.app_select}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

AppSelect.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default AppSelect;
