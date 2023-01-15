import React from "react";
import "./App.css";
import SearchBar from "../components/search-bar/SearchBar";
import Aside from "../components/aside/Aside";
import PostList from "../components/posts/PostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSubredditListAPI from "../services/APIServices.js";

function App() {
  useSubredditListAPI();
  return (
    <>
      <div>test</div>
      <BrowserRouter>
        <SearchBar />
        <div className="max-w-screen-xl m-auto flex flex-initial h-full">
          <Aside />
          <Routes>
            <Route index element={<PostList />} />
            <Route path="*" element={<PostList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

