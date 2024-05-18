import { fetchImages } from './pixabay-api';
import { renderImages, clearGallery } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    if (query === '') {
        iziToast.error({ title: 'Error', message: 'Search query cannot be empty!' });
        return;
    }

    loader.classList.remove('hidden');
    clearGallery();

    try {
        const data = await fetchImages(query);
        if (data.hits.length === 0) {
            iziToast.warning({ title: 'No Results', message: 'Sorry, there are no images matching your search query. Please try again!' });
        } else {
            renderImages(data.hits);
        }
    } catch (error) {
        iziToast.error({ title: 'Error', message: error.message });
    } finally {
        loader.classList.add('hidden');
    }
});
