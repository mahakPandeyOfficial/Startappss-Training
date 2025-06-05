import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = (page = 1, limit = 3) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  };