import {
  isInputValid,
  isNumericStr
} from "./errorDetection";

describe("isInputValid(str)", () => {
  it("should return true for valid input", () => {
    expect(isInputValid("some name")).toBe(true);
    expect(isInputValid("false")).toBe(true);
    expect(isInputValid("0")).toBe(true);
    expect(isInputValid("     1   ")).toBe(true);
  });

  it("should return false for invalid input", () => {
    expect(isInputValid()).toBe(false);
    expect(isInputValid(null)).toBe(false);
    expect(isInputValid(false)).toBe(false);
    expect(isInputValid([])).toBe(false);
    expect(isInputValid("   ")).toBe(false);
    expect(isInputValid(1)).toBe(false);
  });
});

describe("isNumericStr", () => {
  it("should return true for valid number string", () => {
    expect(isNumericStr("1")).toBe(true);
    expect(isNumericStr("1000")).toBe(true);
    expect(isNumericStr("0")).toBe(true);
    expect(isNumericStr("   1000   ")).toBe(true);
    expect(isNumericStr("1.0")).toBe(true);
    expect(isNumericStr(".0")).toBe(true);
    expect(isNumericStr("1.")).toBe(true);
  });

  it("should return false for an invalid number string", () => {
    expect(isNumericStr("1,000")).toBe(false);
    expect(isNumericStr()).toBe(false);
    expect(isNumericStr(null)).toBe(false);
    expect(isInputValid(false)).toBe(false);
    expect(isInputValid([])).toBe(false);
    expect(isInputValid("   ")).toBe(false);
    expect(isInputValid(1)).toBe(false);
  });
});