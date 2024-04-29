import React from "react";
import moment from "moment";

import {
  DATE,
  IS_ACTIVE
} from "../../utils/constants.js";

const displayContent = {
  [DATE]: val => {
    const date = moment(val);
    return `${date.format("MMM D, h:mma")}`;
  },
  [IS_ACTIVE]: val => {
    if (val) {
      return <span role="img" aria-label="true">✅</span>
    }
    return <span role="img" aria-label="false">❌</span>
  }
}

export const Cell = ({children, type}) => {
  const transformMethod = displayContent[type];
  return (
    <div>
      {transformMethod ? transformMethod(children) : children}
    </div>
  )
};
