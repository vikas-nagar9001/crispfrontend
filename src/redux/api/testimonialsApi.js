// testimonialApi.js
import { sendRequest } from '../../Auth/axiosUtil';
import { setTestimonials } from '../Slices/testimonialsSlice';

export const fetchTestimonials = () => async (dispatch) => {
  try {
    const response = await sendRequest('GET', '/testimonial');
    dispatch(setTestimonials(response));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};
