import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/searchSlice'
import subredditListReducer from '../features/subredditListSlice'
import popularPostsReducer from '../features/PostSlice.js'
import rawPopularPostsReducer from '../features/RedditApiSlice.js'

export default configureStore({
  reducer: {
    search: searchReducer,
    rawPopularPosts:rawPopularPostsReducer,
    subredditList: subredditListReducer,
    popularPosts: popularPostsReducer
  }
})
