import React from "react";
import PropTypes from "prop-types";
import classes from "./AppInput.module.scss";

const AppInput = ({ name, id, ...props }) => {
  return (
    <>
      <label htmlFor={id} className={classes.app_label}>
        {name}
      </label>
      <input id={id} className={classes.app_input} {...props} />
    </>
  );
};

AppInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  props: PropTypes.array,
};

export default AppInput;
