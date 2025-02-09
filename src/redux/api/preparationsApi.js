// preparationsApi.js
import { sendRequest } from '../../Auth/axiosUtil';
import { setPreparations } from '../Slices/preparationsSlice';

export const fetchPreparations = (userId) => async (dispatch) => {
  try {
    let response;
    if (userId) {
      // If user is logged in, fetch preparations with userId
      response = await sendRequest('GET', `/preparationcard/${userId}`);
    } else {
      // If user is not logged in, fetch preparations without userId
      response = await sendRequest('GET', '/preparationcard');
    }
    dispatch(setPreparations(response));
  } catch (error) {
    console.error('Error fetching preparations card:', error);
    throw error;
  }
};
