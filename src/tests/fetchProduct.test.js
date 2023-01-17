import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product, { id } from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  
  it('fetchProduct é uma função', () => {
    const actual = fetchProduct;
    const expected = (Function);
    expect(actual).toBeInstanceOf(expected);    
  });

  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: ID não informado',  () => {
    expect(fetchProduct()).rejects.toThrow('ID não informado')
  })

it('fetch é chamado ao executar fetchProductsList', async () => {
  await fetchProduct('computador');
  expect(fetch).toHaveBeenCalled();
});

it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
  await fetchProduct('computador');
  expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');   
});
});




  

  