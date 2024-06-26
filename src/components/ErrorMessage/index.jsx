import React from "react";
import styles from "./styles.module.scss";

export const ErrorMessage = ({children}) => (
  <div className={styles.error} role="alert">{children}</div>
);
