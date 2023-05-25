// histogramSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { apiHistograms } from '../api/apiHistograms';

const initialState = {
  loading: false,
  error: null,
  histograms: [],
};

const histogramsSlice = createSlice({
  name: 'histograms',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(apiHistograms.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiHistograms.fulfilled, (state, action) => {
        state.histograms = action.payload;
        state.loading = false;
      })
      .addCase(apiHistograms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default histogramsSlice.reducer;

export const selectHistograms = state => state.histograms.histograms;
export const selectLoadingHistograms = state => state.histograms.loading;
