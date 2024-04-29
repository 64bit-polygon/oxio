import { isNumericStr } from "./errorDetection.js";

export const normalizeNumericStr = val => {
  if (typeof val !== "string" || !isNumericStr(val)) return val;

  return parseFloat(val).toString();
}