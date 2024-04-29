import { sortPosts } from "./sort.js";
import {
  LABEL,
  QUANTITY,
  DATE,
  IS_ACTIVE,
  ASC,
  DESC
} from "./constants.js";

const A_1_INACTIVE_DATE10 = {
  [LABEL]: "A",
  [QUANTITY]: "1",
  [IS_ACTIVE]: false,
  [DATE]: 10
};

const B_9_INACTIVE_DATE11 = {
  [LABEL]: "B",
  [QUANTITY]: "9",
  [IS_ACTIVE]: false,
  [DATE]: 11
};

const C_2_ACTIVE_DATE8 = {
  [LABEL]: "C",
  [QUANTITY]: "2",
  [IS_ACTIVE]: true,
  [DATE]: 8
};

const D_100_ACTIVE_DATE2 = {
  [LABEL]: "D",
  [QUANTITY]: "100",
  [IS_ACTIVE]: true,
  [DATE]: 2
};

const unsorted = [
  B_9_INACTIVE_DATE11,
  D_100_ACTIVE_DATE2,
  A_1_INACTIVE_DATE10,
  C_2_ACTIVE_DATE8
];

const unsortedLabels = [
  unsorted[0][LABEL],
  unsorted[1][LABEL],
  unsorted[2][LABEL],
  unsorted[3][LABEL]
]

const getValuesByKey = (collection, key) => collection.map(row => row[key]);

describe("sortPosts", () => {
  it("should sort by label in descending order", () => {
    const sorted = sortPosts(unsorted, DESC, LABEL);
    const valuesInOrder = getValuesByKey(sorted, LABEL);
    const shouldBe = ["D", "C", "B", "A"];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by label in ascending order", () => {
    const sorted = sortPosts(unsorted, ASC, LABEL);
    const valuesInOrder = getValuesByKey(sorted, LABEL);
    const shouldBe = ["A", "B", "C", "D"];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by quantity in descending order", () => {
    const sorted = sortPosts(unsorted, DESC, QUANTITY);
    const valuesInOrder = getValuesByKey(sorted, QUANTITY);
    const shouldBe = ["100", "9", "2", "1"];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by quantity in ascending order", () => {
    const sorted = sortPosts(unsorted, ASC, QUANTITY);
    const valuesInOrder = getValuesByKey(sorted, QUANTITY);
    const shouldBe = ["1", "2", "9", "100"];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by date in descending order", () => {
    const sorted = sortPosts(unsorted, DESC, DATE);
    const valuesInOrder = getValuesByKey(sorted, DATE);
    const shouldBe = [11, 10, 8, 2];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by date in ascending order", () => {
    const sorted = sortPosts(unsorted, ASC, DATE);
    const valuesInOrder = getValuesByKey(sorted, DATE);
    const shouldBe = [2, 8, 10, 11];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by isActive in descending order", () => {
    const sorted = sortPosts(unsorted, DESC, IS_ACTIVE);
    const valuesInOrder = getValuesByKey(sorted, IS_ACTIVE);
    const shouldBe = [true, true, false, false];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should sort by isActive in ascending order", () => {
    const sorted = sortPosts(unsorted, ASC, IS_ACTIVE);
    const valuesInOrder = getValuesByKey(sorted, IS_ACTIVE);
    const shouldBe = [false, false, true, true];
    expect(valuesInOrder).toEqual(shouldBe);
  });

  it("should return first param if not an array", () => {
    const result = sortPosts(undefined, ASC, IS_ACTIVE);
    expect(result).toEqual(undefined);
  });

  it("should return posts unsorted param if sortDirction is not recognized", () => {
    const result = sortPosts(unsorted, "QWERTY", IS_ACTIVE);
    const labelsFromResult = getValuesByKey(result, LABEL);
    expect(labelsFromResult).toEqual(unsortedLabels);
  });

  it("should return posts unsorted param if key isn't a string", () => {
    let result = sortPosts(unsorted, DESC);
    let labelsFromResult = getValuesByKey(result, LABEL);
    expect(labelsFromResult).toEqual(unsortedLabels);

    result = sortPosts(unsorted, DESC, []);
    labelsFromResult = getValuesByKey(result, LABEL);
    expect(labelsFromResult).toEqual(unsortedLabels);

    result = sortPosts(unsorted, DESC, false);
    labelsFromResult = getValuesByKey(result, LABEL);
    expect(labelsFromResult).toEqual(unsortedLabels);
  });
});