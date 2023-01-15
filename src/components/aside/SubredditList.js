import React, { useState, useEffect } from "react";
import SubredditLink from "./SubredditLink.js";
import { useSelector, useDispatch } from "react-redux";
import { popularPosts, setAsLoading } from "../../features/PostSlice.js";
import { fetchSubredditPostsAPI } from "../../services/APIServices.js";
import { sanitizePostFromRawData } from "../../services/APIServices.js";

export default function SubredditList() {
  const rawDataObj = useSelector((state) => state.rawPopularPosts);
  const isLoading = rawDataObj.isLoading;
  const isOK = rawDataObj.isOk;
  const apiError = rawDataObj.apiError;
  let message = null;

  const subRedditListObj = useSelector((state) => state.subredditList);

  const dispatch = useDispatch();


  if (isLoading) {
    message = <div>Loading...</div>;
  }

  if (!isOK || apiError !== null) {
    console.log("in error state");

    message = (
      <div className="mt-3">
        Fatal Error: There was an error fetching the data from the Reddit API.
        {apiError ? apiError : ""}
      </div>
    );
  }

  if(!isLoading && isOK){
    message = '';
  }


  const list = subRedditListObj;
  const listArr = list.apiData.apiData;

  async function handleLinkClick(e) {
    let rawData;

    try {
      dispatch(setAsLoading(true));
      rawData = await fetchSubredditPostsAPI(e.target.id);
      const sanitizedPostsArray = sanitizePostFromRawData(rawData);
      dispatch(popularPosts(sanitizedPostsArray));
    } catch (e) {
      console.log("error is ", e);
    }
  }

  let listItems;

  if (listArr !== undefined) {
    listItems = listArr.map((item, index) => {
      // console.log("item is ", item);
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

      return (
        <div key={index}>
          <SubredditLink
            icon={icon}
            reddit={reddit}
            // item={sub}
            handleLinkClick={handleLinkClick}
          />
        </div>
      );
    });
  }

  return (
    <>
     <div>test2</div>
      <div id="subRedditlistStyles" className="mt-9">
        {message}
        {listItems}
      </div>
    </>
  );
}
