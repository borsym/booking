// create a new store with redux that store the destination, date, options
// use the redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().auth.user));
});

export default store;
