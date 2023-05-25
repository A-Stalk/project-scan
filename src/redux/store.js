// store.js
import { configureStore } from '@reduxjs/toolkit';
import accInfoSlice from './slices/accInfoSlice';
import histogramsSlice from './slices/histogramsSlice';
import selectObjectSearch from './slices/objectSearchSlice';
import searchFormDataSlice from './slices/searchFormData';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    accInfo: accInfoSlice,
    histograms: histogramsSlice,
    searchFormDataSlice: searchFormDataSlice,
    objectSearch: selectObjectSearch,
  },
});
