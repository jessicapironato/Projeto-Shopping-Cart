import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productSelected = document.getElementsByClassName('products')[0];
// console.log(productSelected);

const productPrinted = async () => {
  const productInformation = await fetchProductsList('computador');
  productInformation.forEach((element) => {
    productSelected.appendChild(createProductElement(element));
  });
};
productPrinted();
