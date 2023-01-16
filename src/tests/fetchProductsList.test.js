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

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    

  });

  // it('...', () => {
  // });
});