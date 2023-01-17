export const fetchProduct = async (id) => {
  const URL_API_ID = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
  if (!id) {
    throw new Error('ID não informado');
  }
  const response = await fetch(URL_API_ID);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (query) => {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error.message;
  }
};
