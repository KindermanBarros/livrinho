import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTermSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
