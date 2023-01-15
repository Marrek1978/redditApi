import React, { useState } from "react";
import hamburger from "../../resources/images/Hamburger_icon.png";
import Menu from "./Menu.js";

export default function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(e) {
    console.log("hamburger menu clicked");
    setShowMenu(true);
  }

  function handleCloseClick() {
    setShowMenu(false);
  }

  let content;

  if (showMenu) {
    content = (
      <>
        <div
          className="bg-[#191E29]
      min-w-max min-h-max
      p-3
      rounded-lg
      mr-3
      absolute top-0 right-0 z-50
      "
        >
          <div
            className="text-slate-200 font-regular text-md
          mb-2
          "
          >
            Popular Subreddits
            <button onClick={handleCloseClick} className="float-right ml-4">
              X
            </button>
          </div>

          <Menu handleCloseClick={handleCloseClick} />
        </div>
      </>
    );
  }

  return (
    <>
      <img
        src={hamburger}
        alt="mobile menu "
        className="w-7 sm:hidden mr-2 "
        onClick={handleClick}
      />

      {content}
    </>
  );
}
