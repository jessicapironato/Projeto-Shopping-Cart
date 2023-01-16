export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};
