import React, { useState } from "react";
// import { useState } from 'react';
import { useDispatch } from "react-redux";
import { search } from "./searchSlice";
import { useSelector } from "react-redux";
import alien from "../../components/images/blue-alien.png";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");

  const handleSearchStringChange = (event) =>
    setSearchString(event.target.value);

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    //dispatch to store
    if (searchString !== "") {
      // console.log("searchstring is attempting to dispatch");
      dispatch(search(searchString));
    }
    // console.log(searchString);
    setSearchString("");
  };

  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <>
      <div
        className="
        mt-2
        w-screen 
      bg-gradient-to-b from-[#273a5c] to-[#22283f]
      drop-shadow-xl
      h-16
      "
      >
        <div className="max-w-screen-xl m-auto flex items-center h-full justify-between">
          <div id="logo" className="text-xl font-medium text-[#FF4500]">
            Réd-it
            <span className="text-white ml-1">API</span>
          </div>
          <div>
            <form className="flex">
              <input
                type="search"
                id="search-for"
                name="search-for"
                value={searchString}
                onChange={handleSearchStringChange}
                className="bg-[#30405D] opacity-100 shadow appearance-none 
                border rounded  border-slate-100
                w-full py-2 px-3
                placeholder:text-slate-100
                 leading-tight 
                 focus:outline-none 
                 focus:shadow-outline
                 
                   "
                placeholder="Search"
              />

              <button type="submit" onClick={handleSearch}>
                Search
              </button>
            </form>
          </div>
          <div>
            <img src={alien} alt="alien" className="h-8" />
          </div>
        </div>
      </div>
    </>
  );
}
