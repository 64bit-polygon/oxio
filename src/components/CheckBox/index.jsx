import React from "react";
import styles from "./styles.module.scss";

export const CheckBox = ({
  onChange,
  label,
  checked
}) => (
  <label className={styles.checkBoxWrap}>
    <input
      onChange={onChange}
      checked={checked}
      className={styles.checkBox}
      type="checkbox"
    />

    <span className={styles.label}>
      {label}
    </span>
  </label>
);
