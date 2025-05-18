export async function listarDetalhes() {
    const response = await fetch("http://localhost:3001/cpu"); // seu endpoint
    const data = await response.json();
    return data;
  }
  