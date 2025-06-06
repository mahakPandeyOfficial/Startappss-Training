import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

//initially the page and limit are set as 1 and 3 resp after that it can be changed as per params
export const fetchPosts = (page = 1, limit = 3) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  };