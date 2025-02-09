import { sendRequest } from '../../Auth/axiosUtil';
import { setAwards } from '../Slices/awardsSlice';

export const fetchAwards = () => async (dispatch) => {
  try {
    const response = await sendRequest('GET', 'award'); // Use sendRequest with the appropriate URL path
    dispatch(setAwards(response));
  } catch (error) {
    console.error('Error fetching awards:', error);
    throw error;
  }
};
