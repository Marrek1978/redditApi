import "./App.css";
import SearchBar from "../components/search-bar/SearchBar";
import Aside from "../components/aside/Aside";
import Posts from "../components/posts/Posts";

function App() {
  return (
    <>
      <SearchBar />
      <div className="max-w-screen-xl m-auto flex h-full">
        <Aside />
        <Posts />
      </div>
    </>
  );
}

export default App;

