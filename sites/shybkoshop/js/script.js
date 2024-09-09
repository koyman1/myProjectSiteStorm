$(document).ready(function() {
const orderButton = document.querySelectorAll('#order-button');
const orderFormWrapper = document.querySelector('#order-form-wrapper');
const closeButton = document.querySelector('#close-button');

orderButton.forEach(button => {
  button.addEventListener('click', () => {
    orderFormWrapper.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  orderFormWrapper.style.display = 'none';
});

// Отримати всі блоки з класом "car"
const cars = document.querySelectorAll(".car");

// Ітеруватись через кожен блок
cars.forEach((car) => {
  // Отримати значення артикула з блоку
  const article = car.getAttribute("data-article");
  // Знайти відповідне поле форми
  const articleInput = car.querySelector('input[name="Article"]');
  // Встановити значення артикула в полі форми
  articleInput.value = article;
});





});
