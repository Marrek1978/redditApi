import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alien from "../../resources/images/blue-alien.png";
import hamburger from "../../resources/images/Hamburger_icon.png";
import glass from "../../resources/images/glass.png";
import {
  fetchSearchedPostsAPI,
  sanitizePostFromRawData,
} from "../../services/APIServices";
import { popularPosts } from "../../features/PostSlice";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu.js";

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
        px-3
        relative z-10
        "
      >
        <div
          className="max-w-screen-xl h-full 
        text-center
        pt-2 sm:pt-0
        sm:m-auto sm:flex sm:items-center sm:justify-between
        relative right-2
        "
        >
          <div className="flex items-center justify-between sm:block">
            <Link to="/" className="hover:no-underline w-full ">
              <div
                id="logo"
                className="text-xl text-[#FF4500]
              font-medium
              "
                onClick={refetchPopularPosts}
              >
                Réd-it
                <span className="text-white pl-1">API</span>
                {/* <img src={hamburger} alt="mobile menu " className="w-7 float-right sm:hidden mr-2" />
                 */}
              </div>
            </Link>
            <HamburgerMenu />
          </div>
          <div>
            <form className="flex p-3">
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
            <img src={alien} alt="Alien" className="w-7 hidden sm:block" />
          </div>
        </div>
      </div>
    </>
  );
}
