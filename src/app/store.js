import { configureStore } from '@reduxjs/toolkit'

import searchReducer from '../features/search-bar/searchSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
  },
})
