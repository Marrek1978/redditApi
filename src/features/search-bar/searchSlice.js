import { createSlice } from '@reduxjs/toolkit'

const initialState = {searchTerm:'hi'}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search(state, action) {
      console.log("state is ", state.searchTerm )
      return {
        ...state,
        searchTerm: action.payload
      }
    },
  },
})


export default searchSlice.reducer
export const { search } = searchSlice.actions
