import React from "react";
import useSubredditListAPI from "../../services/APIServices.js";
import SubredditList from "./SubredditList.js";

export default function Aside() {
  return (
    <div
      className="basic-card h-fit
        mt-12 mr-0
              "
    >
      <div className="m-6 text-2xl font-light tracking-tight text-slate-300">
        Popular Subreddits
        <SubredditList />
      </div>
    </div>
  );
}
