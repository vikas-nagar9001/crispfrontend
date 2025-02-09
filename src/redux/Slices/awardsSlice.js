import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  awards: [],
};

const awardsSlice = createSlice({
  name: 'awards',
  initialState,
  reducers: {
    setAwards(state, action) {
      state.awards = action.payload;
    },
  },
});

export const { setAwards } = awardsSlice.actions;
export default awardsSlice.reducer;
