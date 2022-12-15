import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

/* 1. Создание и рендер разметки по массиву данных 
galleryItems и предоставленному шаблону элемента галереи.*/

function createMarkup(pictures) {
  console.log(pictures.original);
  //   return `
  // <div class="gallery__item">
  //     <a class="gallery__link" href="${original}">
  //         <img
  //             class="gallery__image"
  //             src="${preview}"
  //             data-source="${original}"
  //             alt="${description}"
  //         />
  //     </a>
  // </div>`;
}

// console.log(createMarkup(galleryItems));
createMarkup(galleryItems);
