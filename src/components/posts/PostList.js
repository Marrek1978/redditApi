import React from "react";
import Post from "./Post.js";
import { useSelector } from "react-redux";

export default function PostList() {
  const postsListArray = useSelector((state) => state.popularPosts.apiData);
  // console.log("postsListArray is, ", postsListArray);

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
