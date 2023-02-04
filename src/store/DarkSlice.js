import { createSlice } from "@reduxjs/toolkit";

const DarkSlice = createSlice({
  name: "dark",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    ToggleDarkTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const DarkActions = DarkSlice.actions;

export default DarkSlice;
