import React, { useState, useEffect } from "react";
import { getPopularSubRedditsListFromAPI } from "../../apiServices/RedditApi.js";
import SubredditList from "./SubredditList.js";
// import ApiDataSubredditList from "../../apiServices/getApiData.js";

// async function getPopularSubRedditList(){
//   await ApiDataSubredditList();
// }

export default function Aside() {
  const [subredditList, setSubredditsList] = useState({isOk: true, apiData: [], apiError: null});

  useEffect(() => {
    (async () => {
      //get popular subreddits from api
      const subReddits = await getPopularSubRedditsListFromAPI();
      // console.log("subReddits is ", subReddits.apiData);
      setSubredditsList(subReddits);
    })();
  }, []);

  return (
    <>
      <div
        className="basic-card w-64
      mt-12 mr-6
      bg-gradient-to-b from-[#273a5c] to-[#22283f]
      drop-shadow-xl
      rounded
      "
      >
        <div className="m-6 text-2xl font-light tracking-tight">
          <h3>Popular Subreddits</h3>
          {/* {result}   */}
          <SubredditList
            subredditList={subredditList}
          />
        </div>
      </div>
    </>
  );
}
