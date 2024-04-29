import React from "react";
import styles from "./styles.module.scss";

export const Header = ({children}) => (
  <header className={styles.header}>{children}</header>
);
