import React from "react";
import classes from "./AppInput.module.scss";

const AppInput = ({ name, id, ...props }) => {
  return (
    <>
      <label htmlFor={id} className={classes.app_label}>{name}</label>
      <input id={id} className={classes.app_input} {...props} />
    </>
  );
};

export default AppInput;
