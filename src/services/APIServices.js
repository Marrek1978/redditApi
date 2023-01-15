import { useEffect } from "react";
import {
  getPopularSubRedditsListFromAPI,
  getSubredditPostsAPI,
  getSearchedPostsAPI,
} from "./RedditApi.js";
import { useDispatch, useSelector } from "react-redux";
import { subredditList } from "../features/subredditListSlice.js";
import { rawPopularPosts } from "../features/RedditApiSlice.js";
import { popularPosts } from "../features/PostSlice.js";
import moment from "moment";

async function useSubredditListAPI() {
  const dispatch = useDispatch();
  const rawDataObj = useSelector((state) => state.rawPopularPosts);

  useEffect(() => {
    let rawData;
    try {
      const fetchSubredditList = async () => {
        rawData = await getPopularSubRedditsListFromAPI();

        let rawList;

        if (rawData[0] === "error") {

          console.log(' no data')
          rawList = {
            isOk: false,
            apiData: rawData,
            apiError: rawData[1],
            isLoading: false,
          };
        } else {
          //add custom error handling here
          rawList = {
            isOk: true,
            apiData: rawData,
            apiError: null,
            isLoading: false,
          };
        }

        dispatch(rawPopularPosts(rawList));
      };
      fetchSubredditList();
    } catch (err) {
      console.log(err);

      const rawList = {
        isOk: false,
        apiData: null,
        apiError: err,
        isLoading: false,
      };

      dispatch(rawPopularPosts(rawList));
    }
  }, []);

  //when raw data loads, sanitize it and dispatch the slices for list and posts.
  useEffect(() => {
    console.log( " in use effect for subreddit list and rawDataObj is",  rawDataObj  );
    const rawPopularPostListsObj = rawDataObj.apiData.data;
    if (rawPopularPostListsObj !== undefined) {
      const popularPostsArrary = rawPopularPostListsObj.children;
      // Subreddits List for state
      const subRedditsArray = []; /// [{title: title, iconUrl: iconUrl }]
      const rawDataArr = popularPostsArrary; /// array of objects with subreddits  25 objects.  need icon, name,
      //creating new obj to return
      rawDataArr.forEach((obj) => {
        let icon_url = "";

        if ("all_awardings" in obj.data) {
          if (obj.data["all_awardings"].length > 0) {
            if ("icon_url" in obj.data["all_awardings"][0]) {
              icon_url = obj.data["all_awardings"][0]["icon_url"];
            }
          }
        }

        const subRedditObj = {
          subreddit: obj.data.subreddit,
          iconUrl: icon_url,
        };
        subRedditsArray.push(subRedditObj);
      });

      const newSubredditList = {
        isOk: true,
        apiData: subRedditsArray,
        apiError: null,
        isLoading: false,
      };

      dispatch(subredditList(newSubredditList));

      const sanitizedPostsArray = sanitizePostFromRawData(rawDataObj.apiData)
      dispatch(popularPosts(sanitizedPostsArray));

    }
  }, [rawDataObj]);
}

export default useSubredditListAPI;

export async function fetchSubredditPostsAPI(subreddit) {
  const rawSubredditPostsData = await getSubredditPostsAPI(subreddit);
  return rawSubredditPostsData;
}

export async function fetchSearchedPostsAPI(searchString) {
  const rawSearchedPostsData = await getSearchedPostsAPI(searchString);
  return rawSearchedPostsData;
}

export function sanitizePostFromRawData(rawData) {
  const rawSubredditPostsDataObj = rawData.data;
  const postsArrary = rawSubredditPostsDataObj.children;
  const rawDataArr = postsArrary;
  const sanitizedPostsArray = [];

  rawDataArr.forEach((obj) => {
    const postObj = {
      title: obj.data.title,
      author: obj.data.author,
      when: obj.data.created_utc,
      timeAgo: moment(new Date(obj.data.created_utc * 1000)).fromNow(),
      imageUrl: obj.data.url,
      postURL: obj.data.url_overridden_by_dest,
      numComments: obj.data.num_comments,
      commentsUrl: obj.data.permalink,
      subreddit: obj.data.subreddit,
      subreddit_subscribers: obj.data.subreddit_subscribers,
    };

    sanitizedPostsArray.push(postObj);
  });

  return sanitizedPostsArray;
}
