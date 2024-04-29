import { selector } from "recoil";
import { postsAtom } from "./atoms";

export const postsSelector = selector({
  key: "postsSelector",
  set: ({ set }, posts) => {
    set(postsAtom, posts);
  },
  get: ({ get }) => {
    return get(postsAtom);
  }
});

