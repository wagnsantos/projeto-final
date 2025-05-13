import axios from 'axios';

// Substitua com o seu IP ou localhost
const API_URL = 'http://localhost:3000/equipamentos'; 

export async function deletarEquipamento(id: string) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
