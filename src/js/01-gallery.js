// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galeryContainer = document.querySelector('.gallery')
const markup = createGalleryItemsMarkup(galleryItems)
galeryContainer.insertAdjacentHTML('beforeend', markup)


function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a class="gallery__link" 
        href="${original}">
        <img class="gallery__image" 
       src="${preview}" 
       alt="${description}" />
    </a>
 </li>`
    }).join('');
};
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

console.log(galleryItems);
