import { refs } from './refs';

export function showLoadButton() {
  refs.loadButton.classList.remove('hidden');
  refs.gallery.classList.add('hidden');
}

export function hideLoadButton() {
  refs.loadButton.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}
