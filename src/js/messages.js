import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showNoMatchMessage() {
  iziToast.error({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export function showNoMoreLoadMessage() {
  iziToast.error({
    position: 'topRight',
    message: "We're sorry, but you've reached the end of search results.",
  });
}

export function showErorrMessage() {
  iziToast.error({
    position: 'topRight',
    message: 'Oops... Something went wrong! Please, try again.',
  });
}
