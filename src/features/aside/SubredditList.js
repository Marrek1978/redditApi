import React from "react";
import Subreddit from "./Subreddit.js";

export default function SubredditList({ subredditList }) {
  // console.log('subredditList is ', subredditList.apiData )

  const listItems = subredditList.apiData.map((sub, index) => {
    // let icon;
    // (sub.iconUrl === '') ? icon =  'https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png' : icon = sub.iconUrl;

    // return (
    //   <div className="flex">
    //     <img src={icon} alt='icon' />
    //     {sub.subreddit}
    //   </div>
    // );

    return (
      <div key={index}>
        <Subreddit 
          item={sub}
        />
      </div>
    );
  });

  return (
    <>
      <div>SubredditList</div>
      <Subreddit />
      {listItems}
    </>
  );
}
