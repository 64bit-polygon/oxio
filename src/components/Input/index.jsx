import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { ErrorMessage } from "../ErrorMessage";

export const Input = ({
  onChange,
  value,
  label,
  hasError,
  errorMessage,
  id,
  isRequired
}) => (
  <div className={cn(styles.inputWrap, {[styles.errored]: hasError})}>
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder=" "
      id={id}
    />
    <label
      className={cn(styles.label, {[styles.required]: isRequired})}
      htmlFor={id}
    >
      {label}
    </label>
  {hasError && (
    <div className={styles.errorMessage}>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  )}
  </div>
);
