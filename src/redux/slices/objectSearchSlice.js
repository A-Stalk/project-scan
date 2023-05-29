// objectSearchSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { apiObjectSearch } from '../api/apiObjectSearch';

const initialState = {
  loading: true,
  error: null,
  items: {},
};

const objectSearchSlice = createSlice({
  name: 'objectSearch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(apiObjectSearch.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(apiObjectSearch.fulfilled, (state, action) => {
        state.items = action.payload;
        localStorage.setItem('objectSearch', JSON.stringify(action.payload));
        state.loading = false;
      })

      .addCase(apiObjectSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error
          ? action.error.message
          : 'Object search request failed.';
      });
  },
});

export default objectSearchSlice.reducer;

export const selectObjectSearch = state => state.objectSearch.items;
export const selectObjectSearchLoading = state => state.objectSearch.loading;
