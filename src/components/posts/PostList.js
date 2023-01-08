import React from "react";
import Post from "./Post.js";
import { useSelector } from "react-redux";

export default function PostList({ subredditList }) {
  const postsListArray = useSelector((state) => state.popularPosts.apiData);
  // console.log("postsListArray is, ", postsListArray);

  let listItems = <div>Loading...</div>;

  if (postsListArray !== undefined) {
    listItems = postsListArray.map((post, index) => {
      return (
        <div key={index}>
          <Post item={post} />
        </div>
      );
    });
  }

  return (
    <>
      <div id="subRedditlistStyles" className="mt-9">
        {listItems}
      </div>
    </>
  );
}
