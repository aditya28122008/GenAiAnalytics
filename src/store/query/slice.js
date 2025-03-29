import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    queries: [],
    loading: false,
    mockData: [
      { name: "Jan", value: 10 },
      { name: "Feb", value: 20 },
      { name: "Mar", value: 40 },
    ],
  },
  reducers: {
    addQuery: (state, action) => {
      state.queries.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    randomizeData: (state) => {
      state.mockData = state.mockData.map((data) => ({
        ...data,
        value: Math.floor(Math.random() * 50) + 10,
      }));
    },
  },
});

export const { addQuery, setLoading, randomizeData } = querySlice.actions;
export default querySlice.reducer;
