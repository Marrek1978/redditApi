import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSubredditPostsAPI } from "../../services/APIServices.js";



export default function SubredditLink({ icon, reddit, handleLinkClick }) {

  const [subReddit, setSubReddit] = useState(reddit);
  

  return (
    <>
      <Link
        to={`/subreddit/${reddit}`}
        // onClick={fetchSubredditPostsAPI(reddit)}
      >
      <div
      
        className="flex mb-0 p-3 
          rounded-lg hover:bg-[#C84438] "

        // onClick={()=> { fetchSubredditPostsAPI(reddit); }}
      >
        <img src={icon} alt="icon" className="w-6 h-6 mr-3"  />
        <button onClick={handleLinkClick}>
          <div className="font-semibold text-sm" 
            id={subReddit}>
            {subReddit}
          </div>
        </button>
      </div>
      </Link>
    </>
  );
}
