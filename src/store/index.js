import { configureStore } from "@reduxjs/toolkit";
import DarkSlice from "./DarkSlice";

const store = configureStore({
  reducer: {
    dark: DarkSlice.reducer,
  },
});

export default store;
