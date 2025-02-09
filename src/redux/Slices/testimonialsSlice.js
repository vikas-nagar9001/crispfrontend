// testimonialsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: [],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials(state, action) {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
