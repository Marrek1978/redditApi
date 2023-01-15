import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popularPosts, setAsLoading } from "../../features/PostSlice.js";
import { fetchSubredditPostsAPI } from "../../services/APIServices.js";
import { sanitizePostFromRawData } from "../../services/APIServices.js";
import MenuItem from "./MenuItem";

export default function Menu({handleCloseClick}) {
  const menuListObj = useSelector((state) => state.subredditList);
  const menuListArr = menuListObj.apiData.apiData;
  console.log("menuListArr", menuListArr); // array of objects for links to

  const dispatch = useDispatch();

  async function handleMenuItemClick(e) {
    try {
      console.log( 'in menu item click' )
      dispatch(setAsLoading(true));
      handleCloseClick();
      const rawData = await fetchSubredditPostsAPI(e.target.id);
      const sanitizedPostsArray = sanitizePostFromRawData(rawData);
      dispatch(popularPosts(sanitizedPostsArray));
    } catch (e) {
      console.log("error is ", e);
    }
  }

  let listMenuItems;

  if (menuListArr !== undefined) {
    listMenuItems = menuListArr.map((item, index) => {
      // console.log("item is ", item);
      let icon;
      let reddit;

      for (let key in item) {
        // console.log("key is ", key);
        if (key === "iconUrl") {

          // console.log("item[key] is ", item[key]);
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
          <MenuItem
            icon={icon}
            reddit={reddit}
            // item={sub}
            handleMenuItemClick={handleMenuItemClick}
          />
        </div>
      );
    });
  }

  console.log("listMenuItems", listMenuItems)

  return (
    <>
      <div id="Menu" className="mt-9">
        {listMenuItems}
      </div>
    </>
  );
}
