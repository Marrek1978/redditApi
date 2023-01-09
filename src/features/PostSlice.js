import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOk: true,
  apiData: [],
  apiError: null,
};

const postsListSlice = createSlice({
  name: "postName",
  initialState,
  reducers: {
    popularPosts(state, action) {
      console.log("in popular posts Slice is ", action.payload);
      return {
        ...state,
        apiData: action.payload,
      };
    },
  },
});

export default postsListSlice.reducer;
export const { popularPosts } = postsListSlice.actions;
