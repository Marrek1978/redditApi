import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSubredditPostsAPI } from "../../services/APIServices.js";

export default function MenuItem({icon, reddit, handleMenuItemClick}) {

  console.log('icon is', icon);
  console.log('reddit is ', reddit);
  console.log('handleMenuItemClick is ', handleMenuItemClick);
  return (
    <>
      <Link to={`/subreddit/${reddit}`}>
        <div
          className="flex mb-0 p-2
          rounded-lg hover:bg-[#C84438] "
        >
          {/* <img src={icon} alt="icon" className="w-6 h-6 mr-3" /> */}
          <button onClick={handleMenuItemClick}>
            <div className="font-regular text-xs text-slate-300" id={reddit}>
              {reddit}
            </div> 
          </button>
        </div>
      </Link>
    </>
  );
}
