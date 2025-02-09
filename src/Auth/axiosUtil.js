import axios from 'axios';

export const baseURL = 'http://localhost:9000/';

const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});



export const sendRequest = async (method, url, data = null) => {
    try {
        const response = await axiosInstance({
            method,
            url, 
            data,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
};