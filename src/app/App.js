import React from "react";
import "./App.css";
import SearchBar from "../components/search-bar/SearchBar";
import Aside from "../components/aside/Aside";
import PostList from "../components/posts/PostList";
import SubredditPostsList from "../components/subreddit/SubredditPostsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchBar />
        <div className="max-w-screen-xl m-auto flex flex-initial h-full">
          <Aside />
          <Routes>
            <Route index element={<PostList />} />
            <Route path='subreddit/:subreddit' element={<SubredditPostsList />} />
            {/* <PostList /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

