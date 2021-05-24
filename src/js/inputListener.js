import { creteGalery, loadMore } from './renderGalery';
import refs from './refs';
import onGalleryElClick from './basicLightbox';

refs.formSearch.addEventListener('submit', e => {
  e.preventDefault();
  creteGalery(refs.inputForm.value);
});

refs.btnMore.addEventListener('click', e => {
  e.preventDefault();
  loadMore(refs.inputForm.value);
});

refs.ulGallery.addEventListener('click', onGalleryElClick);
