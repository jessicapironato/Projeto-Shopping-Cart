import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    const actual = fetchProductsList;
    const expected = (Function);
    expect(actual).toBeInstanceOf(expected);    
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
     await fetchProductsList('computador');
     expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');   
  });

  it('Testa se a função traz os dados como do objeto "computadorSearch" ', async () => {
    const functionProducts = await fetchProductsList('computador');
    expect(functionProducts).toEqual(computadorSearch);
   });

   it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: ID não informado',  () => {
    expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  })
  
});
