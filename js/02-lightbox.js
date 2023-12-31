import { galleryItems } from './gallery-items.js';
// Change code below this line

const collection = document.querySelector('.gallery');

const listItems = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
).join('');

collection.insertAdjacentHTML('beforeend', listItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
 
});
lightbox.on('show.simpleLightbox')

console.log(galleryItems);