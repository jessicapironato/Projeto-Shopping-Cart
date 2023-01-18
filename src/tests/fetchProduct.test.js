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

  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: ID não informado', async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado')
  })

it('fetch é chamado ao executar fetchProductsList', async () => {
  await fetchProduct('MLB1405519561');
  expect(fetch).toHaveBeenCalled();
});

it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
  await fetchProduct('MLB1405519561');
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');   
});

it('o retorno da função fetchProduct é uma estrutura de dados igual ao objeto produto', async () => {
  expect(await fetchProduct('MLB1405519561')).toEqual(product);
});
});




  

  