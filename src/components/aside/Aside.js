import React from "react";
import useSubredditListAPI from "../../services/useRedditAPI.js";
import SubredditList from "./SubredditList.js";

export default function Aside() {

   useSubredditListAPI();

  // if (isLoading) return <div className="mt-3">Loading...</div>;
  // if (error) return <div>Opps... Something went wrong{error}</div>;

  return (
    <div
      className="basic-card h-fit
        mt-12 mr-0
        bg-gradient-to-b from-[#273a5c] to-[#22283f]
        drop-shadow-xl
        rounded-xl
        "
    >
      <div className="m-6 text-2xl font-light tracking-tight text-slate-300">
        Popular Subreddits
        <SubredditList />
      </div>
    </div>
  );
}
