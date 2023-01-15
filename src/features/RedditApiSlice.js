import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOk: true,
  apiData: [],
  apiError: null,
  isLoading: true
};

const popularApiSlice = createSlice({
  name: "popularName",
  initialState,
  reducers: {
    rawPopularPosts(state, action) {
      console.log("in rawPopularAPI Slice and raw data is ", action.payload);
      return {
        ...state,
        apiData: action.payload.apiData,
        isLoading: action.payload.isLoading
      };
    },
    loading(state, action) {
      return {
        ...state,
        loading: action.payload
      }
    }
  },
});

export default popularApiSlice.reducer;
export const { rawPopularPosts } = popularApiSlice.actions;
