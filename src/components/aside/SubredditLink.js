import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSubredditPostsAPI } from "../../services/APIServices.js";

export default function SubredditLink({ icon, reddit, handleLinkClick }) {
  return (
    <>
      <Link to={`/subreddit/${reddit}`}>
        <div
          className="flex mb-0 pt-3 pb-3 pl-1
          rounded-lg hover:bg-[#C84438] "
        >
          <img src={icon} alt="icon" className="w-6 h-6 mr-3 hidden md:block" />
          <button onClick={handleLinkClick}>
            <div className="font-medium text-xs" id={reddit}>
              {reddit}
            </div>
          </button>
        </div>
      </Link>
    </>
  );
}
