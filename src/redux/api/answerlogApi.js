import { sendRequest } from '../../Auth/axiosUtil';

export const fetchAnswerLogsApi = async (userId, questionId) => {
  try {
    const response = await sendRequest('GET',`/answer-log/${userId}/${questionId}`);
    return response.data.answerLogs;
  } catch (error) {
    throw error;
  }
};
