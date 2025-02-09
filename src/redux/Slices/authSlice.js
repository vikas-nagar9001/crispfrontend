import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../Auth/axiosUtil';
import axios from 'axios';

// Async action to fetch user data
export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  try {
    const response = await axios.get(baseURL + 'api/current_user', { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Async action to log out the user
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await axios.get(baseURL + 'api/logout', { withCredentials: true });
  } catch (error) {
    throw error;
  }
});

// Initial state for auth slice
const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

// Auth slice with reducers and async actions
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch user data reducers
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Logout user reducers
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
