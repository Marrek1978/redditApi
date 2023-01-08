import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOk: true,
  apiData: [],
  apiError: null,
};

const subredditListSlice = createSlice({
  name: "subredditListName",
  initialState,
  reducers: {
    subredditList(state, action) {
      // console.log(' in subredditListSlice and action.payload is ', action.payload)
      return {
        ...state,
        apiData: action.payload,
      };
    },
  },
});

export default subredditListSlice.reducer;
export const { subredditList } = subredditListSlice.actions;
