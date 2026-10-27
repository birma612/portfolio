
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProfile = async () => {
  const response = await api.get('/profile/');
  return response.data;
};

export const getSkills = async () => {
  const response = await api.get('/skills/');
  return response.data;
};

export const getExperience = async () => {
  const response = await api.get('/experience/');
  return response.data;
};

export const getEducation = async () => {
  const response = await api.get('/education/');
  return response.data;
};

export const getProjects = async () => {
  const response = await api.get('/projects/');
  return response.data;
};

export const getFeaturedProjects = async () => {
  const response = await api.get('/projects/featured/');
  return response.data;
};

export default api;
