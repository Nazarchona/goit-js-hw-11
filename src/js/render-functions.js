import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li>
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p>Likes: ${likes}</p>
                <p>Views: ${views}</p>
                <p>Comments: ${comments}</p>
                <p>Downloads: ${downloads}</p>
            </div>
        </li>`;
    }).join('');
    gallery.innerHTML = markup;
    new SimpleLightbox('.gallery a').refresh();
}

export function clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
}
