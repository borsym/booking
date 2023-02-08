import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  city: null,
  date: [],
  options: {
    adult: null,
    children: null,
    room: null,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    newSearch: (state, action) => {
      return action.payload;
    },
    resetSearch: (state) => {
      return initialState;
    },
  },
});

export const { newSearch, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
