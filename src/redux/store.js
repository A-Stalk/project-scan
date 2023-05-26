// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import accInfoSlice from './slices/accInfoSlice';
import documentsSlice from './slices/documentsSlice';
import histogramsSlice from './slices/histogramsSlice';
import objectSearchSlice from './slices/objectSearchSlice';
import searchFormDataSlice from './slices/searchFormDataSlice';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  accInfo: accInfoSlice,
  histograms: histogramsSlice,
  objectSearch: objectSearchSlice,
  formData: searchFormDataSlice,
  documents: documentsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     user: userSlice,
//     accInfo: accInfoSlice,
//     histograms: histogramsSlice,
//     searchFormDataSlice: searchFormDataSlice,
//     objectSearch: selectObjectSearch,
//     formData: searchFormDataSlice,
//   },
// });
