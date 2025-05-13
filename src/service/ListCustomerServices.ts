export async function listarEquipamentos() {
    const response = await fetch("http://localhost:3000/equipamentos"); // seu endpoint
    const data = await response.json();
    return data;
  }
  