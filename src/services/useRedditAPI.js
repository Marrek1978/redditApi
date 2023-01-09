import { useEffect } from "react";
import {
  getPopularSubRedditsListFromAPI,
  getSubredditPostsAPI,
} from "./RedditApi.js";
import { useDispatch, useSelector } from "react-redux";
import { subredditList } from "../features/subredditListSlice.js";
import { rawPopularPosts } from "../features/RedditApiSlice.js";
import { popularPosts } from "../features/PostSlice.js";
import moment from "moment";

async function useSubredditListAPI() {

  console.log("useSubredditListAPI is called");
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const dispatch3 = useDispatch();
  const rawDataObj = useSelector((state) => state.rawPopularPosts);

  useEffect(() => {
    try {
      const fetchSubredditList = async () => {
        const rawData = await getPopularSubRedditsListFromAPI();
        dispatch(rawPopularPosts(rawData));
      };
      fetchSubredditList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  //when raw data loads, sanitize it and dispatch the slices for list and posts.
  useEffect(() => {
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
      };

      dispatch2(subredditList(newSubredditList));

      // create post list for state
      const sanitizedPostsArray = []; /// [{title: title, author: author, when: when, imageUrl: imageUrl, comments: comments, commentsUrl: commentsUrl}]
      const rawDataArr2 = popularPostsArrary; /// array of objects with subreddits  25 post objects

      rawDataArr2.forEach((obj) => {
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

      // const newPostsList = {
      //   isOk: true,
      //   apiData: sanitizedPostsArray,
      //   apiError: null,
      // };

      // console.log('sanitizedPostsArray is ', newPostsList)

      dispatch3(popularPosts(sanitizedPostsArray));
    }
  }, [rawDataObj]);
}

export default useSubredditListAPI;

export async function useSubredditPostsAPI(subreddit) {
  console.log( ' in useSubredditPostsAPI nad subreddit is ', subreddit)

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchSubredditPosts = async () => {
        const rawSubredditPostsData = await getSubredditPostsAPI(subreddit);
        console.log('rawSubredditPostsData is ', rawSubredditPostsData ) ;
        //sanitizing data now

        const rawSubredditPostsDataObj = rawSubredditPostsData.data;
        // console.log( 'rawSubredditPostsDataObj is', rawSubredditPostsDataObj)
        const postsArrary = rawSubredditPostsDataObj.children;
        // console.log( 'postsArrary is', postsArrary)
        // Subreddits Post List for state
        // const subRedditPstsArray = []; /// [{title: title, iconUrl: iconUrl }]
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

        // const newPostsList = {
        //   isOk: true,
        //   apiData: sanitizedPostsArray,
        //   apiError: null,
        // };

        // console.log('sanitizedPostsArray is ', sanitizedPostsArray)

        dispatch(popularPosts(sanitizedPostsArray));

        // dispatch(rawPopularPosts(rawData));
      };
      fetchSubredditPosts();
    } catch (err) {
      console.log(err);
    }
  }, []);
}
