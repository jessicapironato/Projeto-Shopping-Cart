import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productSelected = document.getElementsByClassName('products')[0];

// requisito 4 >> faz loadingAdd e cria /append o elemento, faz loadingRemove e add as funções na função productPrinted

const loadingAdd = () => {
  const loading = document.createElement('p');
  loading.innerHTML = 'carregando...';
  loading.classList.add('loading');
  productSelected.appendChild(loading);
};

const loadingRemove = () => {
  const textCarregando = document.getElementsByClassName('loading')[0];
  productSelected.removeChild(textCarregando);
};

// requisito 3

const productPrinted = async () => {
  loadingAdd();
  const productInformation = await fetchProductsList('computador');
  loadingRemove();
  productInformation.forEach((element) => {
    productSelected.appendChild(createProductElement(element));
  });
};
productPrinted();
