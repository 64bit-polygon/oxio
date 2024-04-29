import { normalizeNumericStr } from "./normalizeNumericStr.js";

describe("normalizeNumericStr(str)", () => {
  it("should normalize numeric strings", () => {
    expect(normalizeNumericStr("1.")).toBe("1");
    expect(normalizeNumericStr("010")).toBe("10");
    expect(normalizeNumericStr("1.0")).toBe("1");
    expect(normalizeNumericStr(".0")).toBe("0");
    expect(normalizeNumericStr(".01")).toBe("0.01");
  });

  it("should do nothing to numeric strings that are formatted correctly", () => {
    expect(normalizeNumericStr("10")).toBe("10");
  });

  it("should ignore irrelevant params", () => {
    expect(normalizeNumericStr(1)).toBe(1);
    expect(normalizeNumericStr()).toBe(undefined);
    expect(normalizeNumericStr("one")).toBe("one");
  });
});