import React from "react";
import styles from "./styles.module.scss";

export const Loader = () => (
  <svg
    width="24"
    height="24"
    stroke="#000"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className={styles.loader}>
      <circle
        className={styles.circle}
        cx="12"
        cy="12"
        r="9.5"
        fill="none"
        stroke-width="3"
      />
    </g>
  </svg>
);
