import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alien from "../../resources/images/blue-alien.png";
import glass from "../../resources/images/glass.png";
import {
  fetchSearchedPostsAPI,
  sanitizePostFromRawData,
} from "../../services/APIServices";
import { popularPosts } from "../../features/PostSlice";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();
  const rawSearchedPostsData = useSelector((state) => state.rawPopularPosts);

  const handleSearchStringChange = (event) =>
    setSearchString(event.target.value);

  async function handleSearch(e) {
    e.preventDefault();
    if (searchString !== "") {
      try {
        let rawData = await fetchSearchedPostsAPI(searchString);
        const sanitizedPostsArray = sanitizePostFromRawData(rawData);
        dispatch(popularPosts(sanitizedPostsArray));
      } catch (e) {
        console.log("error is ", e);
      }
    }

    setSearchString("");
  }

  function refetchPopularPosts() {
    console.log("rawSearchedPostsData is ", rawSearchedPostsData);
    const sanitizedPostsArray = sanitizePostFromRawData(
      rawSearchedPostsData.apiData
    );
    dispatch(popularPosts(sanitizedPostsArray));
  }

  return (
    <>
      <div
        id="search-bar"
        className="
        w-screen 
        bg-[#3A4151]
       
        drop-shadow-xl
        h-16
        "
      >
        <div className="max-w-screen-xl  m-auto flex items-center h-full justify-between relative right-2">
          <Link to="/" className="hover:no-underline">
            <div
              id="logo"
              className="text-xl font-medium text-[#FF4500]"
              onClick={refetchPopularPosts}
            >
              Réd-it
              <span className="text-white pl-1">API</span>
            </div>
          </Link>
          <div>
            <form className="flex">
              <input
                type="search"
                id="search-for"
                name="search-for"
                value={searchString}
                onChange={handleSearchStringChange}
                className=" bg-[#525a6d] opacity-100 shadow appearance-none 
                border rounded  border-slate-900
                w-full py-2 px-3
                placeholder:text-slate-400
                 leading-tight 
                 focus:outline-none 
                 focus:shadow-outline
                 
                   "
                placeholder="Search"
              />

              <button
                type="submit"
                onClick={handleSearch}
                className="bg-[#101F3B] rounded-r-lg p-2 relative left-[-3px]
                 "
              >
                <img src={glass} alt="Alien" className="w-6 " />
              </button>
            </form>
          </div>
          <div>
            <img src={alien} alt="Alien" className="w-7" />
          </div>
        </div>
      </div>
    </>
  );
}
