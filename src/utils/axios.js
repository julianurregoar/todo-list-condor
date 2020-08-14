import axios from 'axios';

const token = localStorage.getItem('token');

export const server = axios.create({
  baseURL: 'http://localhost:5000',
});

export const config = {
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
};