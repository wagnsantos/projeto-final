import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', 
});
export const apiPC = axios.create({
  baseURL: 'http://localhost:3001', 
});

