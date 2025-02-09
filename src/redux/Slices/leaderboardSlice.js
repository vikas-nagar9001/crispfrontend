import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLeaderboard } from '../api/leaderboardApi';

export const fetchLeaderboardData = createAsyncThunk(
  'leaderboard/fetchLeaderboardData',
  async () => {
    return await fetchLeaderboard();
  }
);

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    leaderboard: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaderboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.leaderboard = action.payload;
      })
      .addCase(fetchLeaderboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default leaderboardSlice.reducer;
