import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchKey: "hi" }; // sets up key

const searchSlice = createSlice({
  name: "searchName",
  initialState,
  reducers: {
    search(state, action) {
      // console.log("in search Slice and action.payload is ",  action.payloa);
      return {
        ...state,
        searchKey: action.payload,
      };
    },
  },
});

export default searchSlice.reducer;
export const { search } = searchSlice.actions;
