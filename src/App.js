import "./App.css";
import SearchBar from "./features/search-bar/SearchBar";
import Aside from "./features/aside/Aside";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <>
      
        <SearchBar />
        <div className="max-w-screen-xl m-auto flex items-center h-full ">
          <Aside />
          <Posts />
        </div>
    </>
  );
}

export default App;

