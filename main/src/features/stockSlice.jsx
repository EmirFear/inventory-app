// src/features/stockSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: {
    data: [],
    loading: false,
    error: null,
  },
  // Diğer benzer sayfalar için benzer yapılar ekleyebilirsiniz
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart(state, action) {
      const { category } = action.payload;
      state[category].loading = true;
      state[category].error = null;
    },
    fetchSuccess(state, action) {
      const { category, data } = action.payload;
      state[category].data = data;
      state[category].loading = false;
    },
    fetchFailure(state, action) {
      const { category, error } = action.payload;
      state[category].loading = false;
      state[category].error = error;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = stockSlice.actions;

export default stockSlice.reducer;
