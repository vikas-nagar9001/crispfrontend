import axios from 'axios';
import { baseURL } from '../../Auth/axiosUtil';

// Function to fetch leaderboard data from the backend
export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get(`${baseURL}api/leaderboard`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
