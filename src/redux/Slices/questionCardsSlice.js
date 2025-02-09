// src/redux/slices/questionCardsSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const questionCardsSlice = createSlice({
  name: 'questionCards',
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchQuestionCardsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchQuestionCardsSuccess(state, action) {
      state.cards = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchQuestionCardsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchQuestionCardsStart,
  fetchQuestionCardsSuccess,
  fetchQuestionCardsFailure,
} = questionCardsSlice.actions;

export default questionCardsSlice.reducer;
