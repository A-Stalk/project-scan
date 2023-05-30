// documentsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { apiDocuments } from '../api/apiDocuments';

const initialState = {
  loading: false,
  error: null,
  ScanDoc: [],
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(apiDocuments.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(apiDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.ScanDoc = action.payload;
      })

      .addCase(apiDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Documents request failed';
        console.error('apiDocuments rejected:', action.error);
      });
  },
});

export default documentsSlice.reducer;

export const selectDocuments = state => state.documents.ScanDoc;
