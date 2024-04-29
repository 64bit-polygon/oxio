import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.scss";
import { getPosts } from "./utils/api.js";
import { RecoilRoot } from "recoil";
import { postsAtom } from "./state/atoms";

const fetchPosts = async () => {
  try {
    const posts = await getPosts();
    return posts;
  } catch (e) {
    console.error(e);
  }
}

async function initialize() {
  const posts = await fetchPosts();
  const initializeState = ({ set }) => {
    set(postsAtom, posts);
  };

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RecoilRoot initializeState={initializeState}>
      <App />
    </RecoilRoot>,
  );
}

initialize();