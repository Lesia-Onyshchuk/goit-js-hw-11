export default function markup(arr) {
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
