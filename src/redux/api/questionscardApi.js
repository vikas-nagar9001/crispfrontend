// questionsCardApi.js
import { sendRequest } from '../../Auth/axiosUtil';

export const fetchQuestionCards = async (topicId, userId, selectedOptions) => {
  try {
    const { status, skills, difficulty } = selectedOptions;
    let url = `problemsolving/questions?cardid=${topicId}&userId=${userId}`;

    // Include selected options in the query parameters
    if (status) {
      url += `&status=${status}`;
    }
    if (skills && skills.length > 0) {
      url += `&skills=${skills.join(',')}`;
    }
    if (difficulty && difficulty.length > 0) {
      url += `&difficulty=${difficulty.join(',')}`;
    }

    const response = await sendRequest('GET', url);
    return response;
  } catch (error) {
    console.error('Error fetching question cards:', error);
    throw error;
  }
};
