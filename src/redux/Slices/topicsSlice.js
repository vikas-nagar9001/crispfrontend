// topicsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: [],
  selectedTopicId: null,
  selectedTopicHeading: '',
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    setTopics(state, action) {
      state.topics = action.payload;
    },
    setSelectedTopic(state, action) {
      state.selectedTopicId = action.payload.topicId;
      state.selectedTopicHeading = action.payload.topicHeading;
      // Save selected topic to local storage
      localStorage.setItem('selectedTopicId', action.payload.topicId);
      localStorage.setItem('selectedTopicHeading', action.payload.topicHeading);
    },
    // Add a new reducer to clear selected topic if needed
    clearSelectedTopic(state) {
      state.selectedTopicId = null;
      state.selectedTopicHeading = '';
      localStorage.removeItem('selectedTopicId');
      localStorage.removeItem('selectedTopicHeading');
    },
  },
});

export const { setTopics, setSelectedTopic, clearSelectedTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
