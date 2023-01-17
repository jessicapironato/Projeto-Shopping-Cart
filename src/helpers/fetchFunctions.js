export const fetchProduct = async (id) => {
  const URL_API1 = `https://api.mercadolibre.com/items/${id}`;
  if (!id) throw new Error('ID não informado');
  const response = await fetch(URL_API1);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (query) => {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (!query) throw new Error('Termo de busca não informado');
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.results;
};
