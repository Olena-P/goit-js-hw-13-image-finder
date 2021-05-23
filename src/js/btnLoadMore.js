/* При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими.

Страница должна автоматически плавно проскроливаться после рендера изображений, чтобы перевести пользователя на следующие загруженные изображения. Используй метод Element.scrollIntoView(). */

const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
