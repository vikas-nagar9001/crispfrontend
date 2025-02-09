import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../Auth/axiosUtil';

export const fetchAnswerLogs = createAsyncThunk(
  'answerlogs/fetchAnswerLogs',
  async ({ userId, questionId }) => {
    try {
      const response = await axios.get(`${baseURL}answer-log/${userId}/${questionId}`);
      return response.data.answerLogs;
    } catch (error) {
      throw error;
    }
  }
);

const answerlogsSlice = createSlice({
  name: 'answerlogs',
  initialState: {
    answerLogs: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswerLogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnswerLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.answerLogs = action.payload;
      })
      .addCase(fetchAnswerLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default answerlogsSlice.reducer;
