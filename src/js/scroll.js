export function smoothScrollToNewImages() {
  const card = document.querySelector('.image-item');

  if (card) {
    const { height } = card.getBoundingClientRect();

    window.scrollBy({
      top: height * 2.6,
      behavior: 'smooth',
    });
  }
}
