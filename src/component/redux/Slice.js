import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "trending",
  initialState: { trending: "day" },
  reducers: {
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
  },
});

export const { setTrending } = slice.actions;
