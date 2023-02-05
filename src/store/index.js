import { configureStore } from "@reduxjs/toolkit";
import DarkSlice from "./DarkSlice";
import LanguageSlice from "./LanguageSlice";

const store = configureStore({
  reducer: {
    dark: DarkSlice.reducer,
    language: LanguageSlice.reducer,
  },
});

export default store;
