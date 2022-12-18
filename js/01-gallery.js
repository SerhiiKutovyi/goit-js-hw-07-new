import { galleryItems } from './gallery-items.js';

/* 1. Создание и рендер разметки по массиву данных
galleryItems и предоставленному шаблону элемента галереи.*/

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onClickBigPicture);

function createMarkup(pictures) {
  return pictures
    .map(({ original, preview, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
    })
    .join('');
}
galleryRef.innerHTML = createMarkup(galleryItems);

createMarkup(galleryItems);

/* 2. Реализация делегирования на div.gallery 
и получение url большого изображения.*/

function onClickBigPicture(event) {
  event.preventDefault();

  const img = event.target.dataset.source;

  if (event.target !== event.currentTarget) {
    const instance = basicLightbox.create(`
      <img src="${img}" width="800" height="600">
  `);
    instance.show();

    galleryRef.addEventListener('keydown', eve => {
      if (eve.code === 'Escape') {
        instance.close();
      }
    });
  }
}

/* 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
Используй CDN сервис jsdelivr и добавь в
проект ссылки на минифицированные (.min) файлы библиотеки.*/
