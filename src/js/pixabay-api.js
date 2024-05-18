const API_KEY = '43935418-e568f8ae63502e120d68b032c';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return await response.json();
}
