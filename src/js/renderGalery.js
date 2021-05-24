import refs from './refs';
import fetchPhoto from './apiService.js';
import photoCardTpl from '../teamplates/photoCard.hbs';
import noMatchesFound from './pnotify';

let page = 0;
function creteGalery(query) {
  page = 1;
  refs.ulGallery.innerHTML = '';
  fetchPhoto(query, page).then(array => {
    refs.ulGallery.insertAdjacentHTML('beforeend', photoCardTpl(array));
    if (array.length === 0) {
      noMatchesFound();
    }
    if (array.length === 12) {
      return refs.btnMore.classList.remove('is-hidden');
    }
  });
}

function loadMore(query) {
  fetchPhoto(query, page).then(array => {
    page += 1;
    refs.ulGallery.insertAdjacentHTML('beforeend', photoCardTpl(array));
    if (array.length !== 12) {
      return refs.btnMore.classList.add('is-hidden');
    }
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: 'smooth',
    });
  });
}

export { creteGalery, loadMore };
