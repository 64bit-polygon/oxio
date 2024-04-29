import React from "react";
import { Input } from "../Input";
import { isNumericStr } from "../../utils/errorDetection";

export const NumericInput = ({
  onChange,
  value,
  label,
  hasError,
  errorMessage,
  id
}) => {
  const handleChange = ev => {
    const { value } = ev.target;
    if (!value || isNumericStr(ev.target.value)) {
      onChange(ev)
    }
  }

  return (
    <Input
      onChange={handleChange}
      value={value}
      label={label}
      hasError={hasError}
      errorMessage={errorMessage}
      id={id}
    />
  );
};
