import api from './api'; // Certifique-se de ter o api.ts com o baseURL certinho

type Customer = {
  name: string
  type: string
};

export async function cadastrarEquipamento(dados: Customer) {
  const response = await api.post('/equipamentos', dados);
  return response.data;
}

