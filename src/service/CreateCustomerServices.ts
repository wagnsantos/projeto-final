import { api } from "./api";

type Customer = {
  name: string
  type: string
};

export async function cadastrarEquipamento(dados: Customer) {
  const response = await api.post('/equipamentos', dados);
  return response.data;
}

