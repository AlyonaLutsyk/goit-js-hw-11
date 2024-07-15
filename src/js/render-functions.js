import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = images.map(image => `
    <a href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <div><p>Likes:</p> ${image.likes}</div>
        <div><p>Views:</p> ${image.views}</div>
        <div><p>Comments:</p> ${image.comments}</div>
        <div><p>Downloads:</p> ${image.downloads}</div>
      </div>
    </a>
  `).join('');
  
    const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function clearGallery() {
  document.getElementById('gallery').innerHTML = '';
}

export function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

export function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}