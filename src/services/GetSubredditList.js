// import React, { useState, useEffect } from "react";
import { getPopularSubRedditsListFromAPI } from "./RedditApi.js";
// import SubredditList from "./SubredditList.js";
import { useDispatch, useSelector } from "react-redux";
import { subredditList } from "../features/aside/subredditListSlice.js";

export default async function GetSubredditList() {

  // console.log("starting api call");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.subredditList.list);
  // const searchTerms = useSelector((state) => state.searchTerms.searchTerms);
  // console.log("searchTerms is ", searchTerms);

  if (list === undefined) {
    try {
      const subReddits = await getPopularSubRedditsListFromAPI();
      const result = await subReddits.json()
      dispatch(subredditList(result));
    } catch (err) {
      console.log(err);
    }
  }
}
