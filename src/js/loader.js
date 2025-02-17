import { refs } from './refs';

export function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.gallery.classList.add('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}
