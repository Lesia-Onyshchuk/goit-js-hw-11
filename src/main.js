import './css/loader.css';

import { fetchFoo } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  showLoader();

  const input = event.target.elements.search;
  const value = input.value.trim();

  if (!value) {
    gallery.innerHTML = '';
    hideLoader();
    return;
  } else {
    fetchFoo(value);
    hideLoader();
  }

  form.reset();
});
