import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/loader.css';

const API_KEY = '47418374-a80c993bb5abb784419bb47e5';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  showLoader();

  if (event.target.elements.search.value === '') {
    gallery.innerHTML = '';
    iziToast.error({
      title: 'Error',
      message: 'Please try again! Enter what you want to find',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: '#ffffff',
      messageSize: '16px',
      titleColor: '#ffffff',
    });
    hideLoader();
    return;
  }

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
      gallery.insertAdjacentHTML('beforeend', markup(data.hits));
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });

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
             <a class="gallery-link" href="${largeImageURL}">
               <img src="${webformatURL}" alt="${tags}" width="300">
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
