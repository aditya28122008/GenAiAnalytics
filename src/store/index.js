import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./query/slice";
import  themeSlice  from "./theme/slice";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    theme: themeSlice,
  },
});
