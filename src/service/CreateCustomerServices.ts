import api from './api'; // Certifique-se de ter o api.ts com o baseURL certinho

type Customer = {
  name: string;
};

export async function cadastrarEquipamento(dados: Customer) {
  const response = await api.post('/customer', dados);
  return response.data;
}
