import { TextField } from "@mui/material";
import React from "react";

const InputField = (props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={props.handleChange}
      variant="outlined"
      className={props.className}
    />
  );
};

export default InputField;
