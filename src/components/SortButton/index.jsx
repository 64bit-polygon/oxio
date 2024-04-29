import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const SortButton = ({
  toggleDirection,
  setSortType,
  isCurrent,
  direction,
  children
}) => {
  const handleClick = () => {
    if (isCurrent) {
      toggleDirection();
      return;
    }

    setSortType();
  }

  const focusClassNames = cn(
    styles.innerWrap,
    styles[direction],
    {
      [styles.current]: isCurrent
    }
  );

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <span className={focusClassNames}>
        {children}
      </span>
    </button>
  )
};
