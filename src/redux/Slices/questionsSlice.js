import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedQuestion: null,
  loading: false,
  error: null,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    fetchQuestionStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchQuestionSuccess(state, action) {
      state.selectedQuestion = action.payload;
      state.loading = false;
    },
    fetchQuestionFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchQuestionStart, fetchQuestionSuccess, fetchQuestionFailure } = questionsSlice.actions;
export default questionsSlice.reducer;
