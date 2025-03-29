import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggle: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
