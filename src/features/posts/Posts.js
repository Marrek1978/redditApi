import React from "react";
import {usePopularPostsAPI} from "../../apiServices/useRedditAPI.js";
import PostList from "./PostList.js";

export default function Posts() {

  // usePopularPostsAPI();

  return (
    <>
      <div
        className="basic-card basis-4/5
      mt-12 ml-6
      bg-gradient-to-b from-[#273a5c] to-[#22283f]
      drop-shadow-xl
      rounded
      "
      >
        <div className="pl-12">
        <PostList />
         
        </div>
      </div>
    </>
  );
}



