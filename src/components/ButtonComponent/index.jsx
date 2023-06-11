import React from "react";
import Button from "@mui/material/Button";
import { getClassNameByVariant } from "./helper.js";
import "./style.css";
export default function ButtonComponent(props) {
  return (
    <Button
      className={getClassNameByVariant(props.variant, props.disable)}
      onClick={props.handleOnClick}
      id={props.id}
      variant={props.variant}
      disable={props.disable}
    >
      {props.label}
    </Button>
  );
}
