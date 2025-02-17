import { refs } from './refs';
import { showLoader, hideLoader } from './loader';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `
        <li class="image-item">
            <a href=${largeImageURL}>
                <img class="image" src="${webformatURL}"
                alt="${filterTags(tags)}">
                <ul class="stat-list">
                    <li class="stat-item">
                        <h3 class="stat-title">Likes</h3>
                        <p class="stat-description">${likes}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Views</h3>
                        <p class="stat-description">${views}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Comments</h3>
                        <p class="stat-description">${comments}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Downloads</h3>
                        <p class="stat-description">${downloads}</p>
                    </li>
                </ul>
            </a>
      </li>
      `;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('\n');
}

const largeImages = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

export function renderImages(images) {
  showLoader();

  const markup = imagesTemplate(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  largeImages.refresh();

  hideLoader();
}

function filterTags(tags) {
  const tagsArray = tags.split(',');
  const tagsTrim = tagsArray.map(tag => tag.trim());
  const uniqueTegs = new Set(tagsTrim);

  return [...uniqueTegs].join(', ');
}
