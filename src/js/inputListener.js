import { creteGalery, downloadMore } from './renderGalery';
import refs from './refs';

refs.formSearch.addEventListener('submit', e => {
  e.preventDefault();
  creteGalery(refs.inputForm.value);
});

refs.btnMore.addEventListener('click', e => {
  e.preventDefault();
  downloadMore(refs.inputForm.value);
});
