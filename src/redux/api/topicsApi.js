// topicsApi.js
import { sendRequest } from '../../Auth/axiosUtil';
import { setTopics, setSelectedTopic } from '../Slices/topicsSlice';

export const fetchTopics = () => async (dispatch) => {
  try {
    const response = await sendRequest('GET', 'topicscard');
    dispatch(setTopics(response));
  } catch (error) {
    console.error('Error fetching topics:', error);
    throw error;
  }
};

export const setSelectedTopicById = (topicId, topicHeading) => (dispatch) => {
  dispatch(setSelectedTopic({ topicId, topicHeading }));
};
