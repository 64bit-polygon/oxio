export const isInputValid = val => {
  if (typeof val !== "string") return false;
  return !!val.trim();
};

export const isNumericStr = val => {
  if (typeof val !== "string") return false;
  return Number(parseFloat(val)) == val;
}
