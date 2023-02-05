import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "language",
  initialState: {
    isLanguage: "id",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.isLanguage = action.payload;
    },
  },
});

export const LanguageActions = LanguageSlice.actions;
export default LanguageSlice;
