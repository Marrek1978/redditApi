import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search-bar/searchSlice'
import subredditListReducer from '../features/aside/subredditListSlice'
import popularPostsReducer from '../features/posts/PostSlice.js'
import rawPopularPostsReducer from '../apiServices/RedditApiSlice.js'

export default configureStore({
  reducer: {
    search: searchReducer,
    rawPopularPosts:rawPopularPostsReducer,
    subredditList: subredditListReducer,
    popularPosts: popularPostsReducer
  }
})
