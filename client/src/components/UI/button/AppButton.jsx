import React from "react";
import PropTypes from "prop-types";
import classes from "./AppButton.module.scss";

const AppButton = ({ children, ...props }) => {
  return (
    <button className={classes.app_button} {...props}>
      {children}
    </button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object,
};

export default AppButton;
