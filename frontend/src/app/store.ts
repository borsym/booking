// create a new store with redux that store the destination, date, options
// use the redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;
// Path: Booking\frontend\src\app\bookingSlice.ts
// create a new slice with redux toolkit
