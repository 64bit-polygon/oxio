import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Input } from "../Input";
import { NumericInput } from "../NumericInput";
import { CheckBox } from "../CheckBox";
import { SubmitButton } from "../SubmitButton";
import { Header } from "../Header";
import { makePost, getPosts } from "../../utils/api.js";
import { isInputValid } from "../../utils/errorDetection.js";
import { normalizeNumericStr } from "../../utils/normalizeNumericStr.js";
import { useSetRecoilState } from "recoil";
import { postsSelector } from "../../state/selectors.js";
import {
  LABEL,
  QUANTITY,
  DATE,
  IS_ACTIVE
} from "../../utils/constants.js";

const DEFAULT_BUTTON_TEXT = "Add record";

export const InputForm = () => {
  const [label, setLabel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [hasLabelError, setHasLabelError] = useState(null);
  const [hasAmountError, setHasAmountError] = useState(null);
  const [hasServerError, setHasServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT);
  const setPosts = useSetRecoilState(postsSelector);
  
  useEffect(() => {
    const val = (hasAmountError !== false) || (hasLabelError !== false);
    setIsSubmitDisabled(val);
  }, [hasLabelError, hasAmountError]);

  useEffect(() => {
    if (hasLabelError === null && !label) return;
    setHasLabelError(!isInputValid(label));
  }, [label, hasLabelError]);

  useEffect(() => {
    if (hasAmountError === null && !quantity) return;
    setHasAmountError(!isInputValid(quantity));
  }, [quantity, hasAmountError]);

  const resetForm = (successful = true) => {
    setTimeout(() => {
      setIsLoading(false);
      if (!successful) return;
      setHasAmountError(null);
      setHasLabelError(null);
      setLabel("");
      setQuantity("");
      setIsActive(false);
      setButtonText("Added!");
      setTimeout(() => {
        setButtonText(DEFAULT_BUTTON_TEXT);
      }, 2000);
    }, 1000);
  }

  const handleClick = async () => {
    setHasServerError(false);
    setIsLoading(true);

    try {
      const data = {
        [LABEL]: label,
        [QUANTITY]: normalizeNumericStr(quantity),
        [IS_ACTIVE]: isActive,
        [DATE]: Date.now()
      };
      await makePost(data);
    } catch (err) {
      setHasServerError(true);
      resetForm(false);
      return;
    }

    try {
      const allPosts = await getPosts();
      setPosts(allPosts)
      resetForm();
    } catch (err) {
      setHasServerError(true);
      resetForm(false);
    }
  }

  return (
    <form className={styles.form}>
      <Header>Form</Header>
      <div>
        <Input
          onChange={ev => setLabel(ev.target.value)}
          value={label}
          label="Label"
          hasError={hasLabelError}
          errorMessage="Label is required"
          id="label"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.half}>
          <NumericInput
            onChange={ev => setQuantity(ev.target.value)}
            value={quantity}
            label="Quantity"
            hasError={hasAmountError}
            errorMessage="Quantity is required"
            id="quantity"
          />
        </div>
        <div className={cn(styles.half, styles.right)}>
          <CheckBox
            onChange={() => setIsActive(!isActive)}
            checked={isActive}
            label="Is Active"
            id={isActive}
          />
        </div>
      </div>
      <div className={styles.submit}>
        <SubmitButton
          isDisabled={isSubmitDisabled}
          isLoading={isLoading}
          onClick={handleClick}
          errorMessage="Server error, try again"
          hasError={hasServerError}
        >
          {buttonText}
        </SubmitButton>
      </div>
    </form>
  );
};
