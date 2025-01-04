// /frontend/src/api/clothes.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/clothes';

export const getClothes = async () => await axios.get(API_URL);
export const addClothes = async (data) => await axios.post(API_URL, data);
export const updateClothes = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteClothes = async (id) => await axios.delete(`${API_URL}/${id}`);
