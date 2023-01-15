import React from "react";
import Post from "./Post.js";
import { useSelector } from "react-redux";
import { Animate, AnimateGroup } from 'react-simple-animate';
import { useState } from "react";

export default function PostList() {
  const data = useSelector((state) => state.popularPosts);
  console.log("data for postlist is, ", data);
  const isLoading = data.isLoading;
  const error = data.apiError;
  // console.log("post data is, ", data);
  const postsListArray = data.apiData;
  const [play, setPlay] = useState(false);

  if (error) {
    console.log("error is ", error);
  }

  let listItems = <div>Loading2...</div>;

  if (postsListArray !== undefined) {
    listItems = postsListArray.map((post, index) => {
      return (
        <div key={index}>
          <Post post={post} index={index} />
        </div>
      );
    });
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          className="posts-location h-fit w-3/4
            mt-12 ml-6 
            flex-1
           "
        >
          {/* {isLoading ? <div>Loading...</div> : ""} */}
          <AnimateGroup play>

          <div id="postList" className="">
            {listItems}
          </div>
          </AnimateGroup>
        </div>
      )}
    </>
  );
}
