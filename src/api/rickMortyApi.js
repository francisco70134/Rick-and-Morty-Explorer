const BASE_URL = "https://rickandmortyapi.com/api";

// Obtiene personajes con filtros y paginación
export const getCharacters = async (page = 1, filters = {}) => {
  const params = new URLSearchParams();

  params.append("page", page);

  if (filters.name) {
    params.append("name", filters.name);
  }

  if (filters.status) {
    params.append("status", filters.status);
  }

  if (filters.gender) {
    params.append("gender", filters.gender);
  }

  const response = await fetch(`${BASE_URL}/character?${params.toString()}`);

  return response.json();
};

export const getCharacterById = async (id) => {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  return response.json();
};
