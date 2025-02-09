import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  preparations: [],
};

const preparationsSlice = createSlice({
  name: 'preparations',
  initialState,
  reducers: {
    setPreparations(state, action) {
      state.preparations = action.payload;
    },
  },
});

export const { setPreparations } = preparationsSlice.actions;
export default preparationsSlice.reducer;
