const API_KEY = '21749027-f0f5bf2dcfec2969f660ae25a';

const BASE_URL = 'https://pixabay.com/api/';

function fetchPhoto(query, page) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
  )
    .then(response => {
      return response.json();
    })
    .then(object => {
      return object.hits;
    })
    .catch(error => console.log(error));
}
export default fetchPhoto;

// fetchPhoto()
//   .then(renderPhotoCard)
//   .catch(error => console.log(error));

// function renderPhotoCard(page) {
//   const markup = photoCardTpl(page);
//   refs.ulGallery.innerHTML = markup;
// }
