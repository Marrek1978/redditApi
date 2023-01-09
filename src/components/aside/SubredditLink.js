import React from "react";
import { Link } from "react-router-dom";
import { useSubredditPostsAPI } from "../../services/useRedditAPI.js";

export default function SubredditLink({ item }) {
  let icon;
  let reddit;

  for (let key in item) {
    if (key === "iconUrl") {
      if (item[key] === "") {
        icon =
          "https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png";
      } else {
        icon = item[key];
      }
    }
    if (key === "subreddit") {
      reddit = item[key];
    }
  }

  function subredditClickHandler(e) {
    console.log("subreddit clicked");
    // useSubredditPostsAPI(reddit);
  }

  return (
    <>
      <Link to={`/subreddit/${reddit}`} onClick={subredditClickHandler}>
        <div 
        className="flex mb-0 p-3 rounded-lg hover:bg-rose-900 hover:cursor-pointer"
        // onClick={subredditClickHandler}
        >
          <img src={icon} alt="icon" className="w-6 h-6 mr-3" />
          <div className="font-semibold text-sm">{reddit}</div>
        </div>
      </Link>
    </>
  );
}
