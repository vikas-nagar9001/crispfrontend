import { fetchQuestionStart, fetchQuestionSuccess, fetchQuestionFailure } from '../Slices/questionsSlice';
import { sendRequest } from '../../Auth/axiosUtil';
export const fetchQuestion = (topicid) => async (dispatch) => {
  try {
    dispatch(fetchQuestionStart());
    // Use sendRequest function with the appropriate URL path
    const response = await sendRequest('GET', `questions/allquestions?topicid=${topicid}`);
    dispatch(fetchQuestionSuccess(response));
  } catch (error) {
    dispatch(fetchQuestionFailure(error.message));
  }
};
