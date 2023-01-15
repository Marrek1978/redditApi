import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOk: true,
  apiData: [],
  apiError: null,
  isLoading: true,
};

const postsListSlice = createSlice({
  name: "postName",
  initialState,
  reducers: {
    popularPosts(state, action) {
      return {
        ...state,
        apiData: action.payload,
        isLoading: false,
      };
    },
    setAsLoading(state, action) {
      return {
        ...state,
        isLoading: true,
      };
    }
  },
});

export default postsListSlice.reducer;
export const { popularPosts, setAsLoading } = postsListSlice.actions;
