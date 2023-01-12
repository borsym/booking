import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  destination: '',
  date: '',
  options: {},
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    changeDestination: (state: any, action: any) => {
      state.destination = action.payload;
    },
  },
});

export const { changeDestination } = bookingSlice.actions;

export default bookingSlice.reducer;
