// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '47418374-a80c993bb5abb784419bb47e5';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();

  const params = new URLSearchParams({
    key: API_KEY,
    q: event.target.elements.search.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  console.log(event.target.elements.search.value);
  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      gallery.innerHTML = '';
      console.log(data);
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          messageSize: '16px',
          titleColor: '#ffffff',
        });
      }
      console.log(markup(data.hits));
      gallery.insertAdjacentHTML('beforeend', markup(data.hits));
    })
    .catch(error => console.log(error));

  function markup(arr) {
    return arr
      .map(
        ({
          webformatURL,
          tags,
          largeImageURL,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li>
             <a>
               <img src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}" width="300">
             </a>
             <ul>
             <li>
               <h2>Likes</h2>
               <p>${likes}</p>
             </li>
             <li>
               <h2>Views</h2>
               <p>${views}</p>
             </li>
             <li>
               <h2>Comments</h2>
               <p>${comments}</p>
             </li>
             <li>
               <h2>Downloads</h2>
               <p>${downloads}</p>
             </li>
             </ul>
       </li>`
      )
      .join('');
  }
  form.reset();
});

// gallery.addEventListener('click', clickFoo);

// function clickFoo(event) {
//   if (event.target.classList.contains('gallery')) {
//     return;
//   }
//   event.preventDefault();
//   const largeImageURL = event.target.dataset.source;
//   console.log(event.target.dataset.source);
//   basicLightbox
//     .create(`<img src="${largeImageURL}" width="1112" height="640">`)
//     .show();
// }

gallery.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = target.dataset.source;

  if (!largeImageURL) {
    console.log('Велике зображення не знайдено.');
    return;
  }

  // Використовуємо basicLightbox для відкриття великого зображення
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${target.alt}" width="800">
  `);

  instance.show();
});
