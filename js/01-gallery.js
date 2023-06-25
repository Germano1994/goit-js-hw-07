import { galleryItems } from './gallery-items.js';
// Change code below this line

const collection = document.querySelector('.gallery');

const listItems = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
).join('');

collection.insertAdjacentHTML('afterbegin', listItems);

collection.addEventListener('click', (event) => {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const largeImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImageUrl}" />`).show();
});