import React, { useEffect, useState } from "react";
import commentIcon from "../../resources/images/commentIcon.png";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";

export default function Post({ post, index }) {
  const title = post.title;
  const author = post.author;
  // const when = post.when;
  const timeAgo = post.timeAgo;
  const imageUrl = post.imageUrl;
  const postURL = post.postURL;
  const numComments = post.numComments;
  const commentsUrl = post.commentsUrl;
  const subreddit = post.subreddit;
  const subreddit_subscribers = post.subreddit_subscribers;
  // const [play, setPlay] = useState(true);

  let postBody;
  const isRedditlink = imageUrl.match(/(redd.*it)/);
  const isVideo = imageUrl.match(/(https:\/\/v.*)/);


  const commentsHtml = (
    <a href={`https://www.reddit.com${commentsUrl}`} target="_blank">
      {numComments} comments
    </a>
  );

  //post with image
  if (postURL && isRedditlink && !isVideo) {
    postBody = (
      <>
        <div id="postBody" className="flex flex-row items-center rounded">
          <img src={imageUrl} alt="post" className="w-full rounded-xl mb-3" />
        </div>
        <div id="postFooter" className="flex flex-row items-baseline  text-[#a4a7b3]">
          {commentsHtml}
          <img
            src={commentIcon}
            alt="comments icon"
            className="relative top-1.5 ml-3"
          />
        </div>
      </>
    );
  }

  //video or external link to image
  if ((postURL && !isRedditlink) || isVideo) {
    postBody = (
      <div id="postBody" className="w-full">
        <div
          id="white-card"
          className="w-full 
          bg-slate-200
          pt-6 pb-8 px-6
          mb-6
          rounded-xl 
          flex justify-center flex-col items-center
          "
        >
          <div id="external-link" className=" text-[#1E1E2D] whitespace-normal">
            <div className="text-base font-semibold">
              <a href={postURL} target="_blank">
                {isVideo ? "Video" : "External"} Link
              </a>
            </div>
            <a href={postURL} target="_blank">
              {imageUrl}
            </a>
          </div>
          <div className="flex flex-row items-baseline">
            <div className=" text-[#1E1E2D]">{commentsHtml}</div>
            <div>
              <img
                src={commentIcon}
                alt="comments icon"
                className="pl-3 relative top-1.5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // no media
  if (!postURL) {
    postBody = (
      <div id="postBody" className="w-full">
        <div
          id="white-card"
          className="w-full 
          bg-slate-200
          pt-6 pb-8 mb-6
          rounded-xl 
          flex justify-center items-baseline
          "
        >
          <div className=" text-[#1E1E2D]">{commentsHtml}</div>
          <div>
            <img
              src={commentIcon}
              alt="comments icon"
              className="pl-3 relative top-1.5"
            />
          </div>
        </div>
      </div>
    );
  }

  // h-3 = 12px
  // h-4 = 16px
  // h-6 = 24px
  // h-8 = 32px
  // h-10 = 40px
  // h-12 = 48px

  return (
    <>
      <Animate
        play={true}
        key={index}
        sequenceIndex={index}
        start={{ opacity: 0, transform: "translateY(-10px)" }}
        end={{ opacity: 1, transform: "translateY(0)" }}
      >
        <div
          id="wholePost"
          className="flex flex-col items-center w-full 
    pl-12 pr-12 pt-7 pb-6
    mb-6 mr-3
    bg-gradient-to-b from-[#323949] to-[#252B39]
    drop-shadow-xl
    rounded-xl
    "
        >
          <div
            id="postHeader"
            className="flex flex-row w-full justify-between items-baseline flex-wrap
        mb-3 "
          >
            <div
              id="post-title"
              className="text-xl font-semibold whitespace-normal"
            >
              <a href={postURL} target="_blank">
                {title}
              </a>
            </div>

            <div id="post-author" className="text-xs font-normal text-[#a4a7b3] ">
              posted by {author}
              <span id="post-posted" className="ml-2">
                {timeAgo} hours ago
              </span>
            </div>
          </div>

          {postBody}
          <div className="w-full text-xs  text-[#a4a7b3]">
            {/* <a href='' className="hover:underline" > */}
            {subreddit}
            {/* </a> */}({subreddit_subscribers} subscribers)
          </div>
        </div>
      </Animate>
    </>
  );
}
