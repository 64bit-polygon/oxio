import { ASC, DESC, QUANTITY } from "./constants.js";

export const sortPosts = (data, sortDirction, key) => {
  if (!Array.isArray(data) || ![ASC, DESC].includes(sortDirction) || typeof key !== "string") return data;

  return data.toSorted(
  (memberA, memberB) => {
    let a = memberA[key];
    let b = memberB[key];

    if (key === QUANTITY) {
      a = parseInt(a, 10);
      b = parseInt(b, 10);
    }

    if (typeof a === "string") {
      return sortDirction === ASC ? a.localeCompare(b, "en") : b.localeCompare(a, "en");
    }

    return sortDirction === ASC ? a - b : b - a;
  });
}