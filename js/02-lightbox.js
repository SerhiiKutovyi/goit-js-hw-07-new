import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createMarkup(items) {
  return items
    .map(ele => {
      return `<div class="gallery">
      <a class="gallery__item" href="${ele.original}">
  <img class="gallery__image" src="${ele.preview}" alt="${ele.description}" />
</a>
</div> `;
    })
    .join('');
}

galleryRef.innerHTML = createMarkup(galleryItems);

createMarkup(galleryItems);

galleryRef.addEventListener('click', openItemsClick);

function openItemsClick(event) {
  event.preventDefault();

  if (event.target !== event.currentTarget) {
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
