import React from "react";
// import { getPopularSubRedditsListFromAPI } from "../../apiServices/RedditApi.js";
// import { useDispatch, useSelector } from "react-redux";
// import { subredditList } from "./subredditListSlice.js";
import useSubredditListAPI from "../../apiServices/useRedditAPI.js";
import SubredditList from "./SubredditList.js";

export default function Aside() {

   useSubredditListAPI();

  // if (isLoading) return <div className="mt-3">Loading...</div>;
  // if (error) return <div>Opps... Something went wrong{error}</div>;

  return (
    <div
      className="basic-card basis-80
  mt-12 mr-0
  bg-gradient-to-b from-[#273a5c] to-[#22283f]
  drop-shadow-xl
  rounded
  "
    >
      <div className="m-6 text-2xl font-light tracking-tight">
        <h3> Popular Subreddits</h3>
        <SubredditList />
      </div>
    </div>
  );
}
