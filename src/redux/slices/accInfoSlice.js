// accInfoSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { apiAccInfo } from '../api/apiAccInfo';

const accInfoSlice = createSlice({
  name: 'accInfo',
  initialState: {
    usedCompanyCount: null,
    companyLimit: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(apiAccInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(apiAccInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usedCompanyCount = action.payload.usedCompanyCount;
        state.companyLimit = action.payload.companyLimit;
      });
  },
});

export default accInfoSlice.reducer;
