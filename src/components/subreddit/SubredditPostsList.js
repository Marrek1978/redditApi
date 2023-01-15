import React from "react";
import { useSelector } from "react-redux";
import Post from "../posts/Post.js";
import { fetchSubredditPostsAPI } from "../../services/APIServices.js";
import { useParams } from "react-router-dom";

export default function SubredditPostsList() {
  
  
  // const { subreddit } = useParams();
  // fetchSubredditPostsAPI(subreddit);
  
  const postsListArray = useSelector((state) => state.popularPosts.apiData);
  console.log("postsListArray in subred post List is, ", postsListArray);
  let listItems = <div>Loading...</div>;

  if (postsListArray !== undefined) {
    listItems = postsListArray.map((post, index) => {
      return (
        <div key={index}>
          <Post post={post} />
        </div>
      );
    });
  }

  return (
    <>
     <div
        className="posts-location h-fit w-3/4
            mt-12 ml-6 
            flex-1
           "
      >
      <div id="postList" className="">
        {listItems}
      </div>
      </div>
    </>
  );
}
