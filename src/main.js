import { refs } from './js/refs';
import searchImages from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { showLoader, hideLoader } from './js/loader';
import { showLoadButton, hideLoadButton } from './js/load-more-button';
import {
  showNoMatchMessage,
  showNoMoreLoadMessage,
  showErorrMessage,
} from './js/messages';
import { smoothScrollToNewImages } from './js/scroll';

refs.searchForm.addEventListener('submit', handleFormSubmit);
refs.loadButton.addEventListener('click', handlePagination);

let userValue = '';
let page = 1;

async function handleFormSubmit(e) {
  e.preventDefault();

  userValue = e.target.elements['search-images'].value.trim();

  page = 1;
  refs.gallery.innerHTML = '';

  showLoader();
  hideLoadButton();

  try {
    const data = await searchImages(userValue, page);

    if (data.hits.length === 0) {
      showNoMatchMessage();
      hideLoader();
      return;
    }

    renderImages(data.hits);
    hideLoader();

    if (data.totalHits > page * 40) {
      showLoadButton();
    }
  } catch {
    showErorrMessage();
    hideLoader();
  }

  e.target.reset();
}

async function handlePagination() {
  page += 1;

  showLoader();
  hideLoadButton();

  try {
    const data = await searchImages(userValue, page);
    renderImages(data.hits);
    hideLoader();
    showLoadButton();

    if (data.totalHits <= page * 40) {
      hideLoadButton();
      showNoMoreLoadMessage();
    }

    smoothScrollToNewImages();
  } catch {
    showErorrMessage();
  }
}
