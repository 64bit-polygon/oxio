import React from "react";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./styles.module.scss";
import cn from "classnames";

export const SubmitButton = ({
  isLoading,
  isDisabled,
  onClick,
  hasError,
  errorMessage,
  children
}) => {
  const handleClick = () => {
    if (isLoading) return;
    onClick();
  }

  return (
    <div className={styles.buttonWrap}>
      <button
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        className={cn(styles.button, {[styles.loading]: isLoading })}
      >
        {isLoading ? "Loading" : children}
      </button>
    {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
};
