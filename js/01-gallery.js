import { galleryItems } from './gallery-items.js';

/* 1. Создание и рендер разметки по массиву данных
          galleryItems и предоставленному шаблону элемента галереи.*/

const galleryRef = document.querySelector('.gallery');

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

galleryRef.addEventListener('click', onClickBigPicture);

function onClickBigPicture(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg" width="800" height="600">
    
`);
  console.log(instance);

  instance.show();
  // console.log(event.target.dataset.source);
}

/* 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
Используй CDN сервис jsdelivr и добавь в
 проект ссылки на минифицированные (.min) файлы библиотеки.*/
