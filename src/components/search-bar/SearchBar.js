import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../features/searchSlice";
import { Link } from "react-router-dom";
import alien from "../../resources/images/blue-alien.png";
import glass from "../../resources/images/glass.png";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  const handleSearchStringChange = (event) =>
    setSearchString(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchString !== "") {
      dispatch(search(searchString));
    }
    setSearchString("");
  };

  // const searchTerm = useSelector((state) => state.search.searchKey);
  // console.log(' in search bar searchTerm is ', searchTerm)

  return (
    <>
      <div
        id="search-bar"
        className="
        w-screen 
        bg-gradient-to-b from-[#273a5c] to-[#22283f]
        drop-shadow-xl
        h-16
        "
      >
        <div className="max-w-screen-xl  m-auto flex items-center h-full justify-between relative right-2">
          <Link to="/" className="hover:no-underline">
            <div id="logo" className="text-xl font-medium text-[#FF4500]">
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
                className="bg-[#30405D] opacity-100 shadow appearance-none 
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
                className="bg-[#101F3B] rounded-r-lg p-2 relative left-[-3px] "
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
