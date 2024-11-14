	$(document).ready(function() {
  // Toggle the header burger and menu
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // Show order form when order button is clicked
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

  // Set the value of the Article input field for each car
  const cars = document.querySelectorAll(".car");

  cars.forEach((car) => {
    const article = car.getAttribute("data-article");
    const articleInput = car.querySelector('input[name="Article"]');
    articleInput.value = article;
  });
});
$(document).ready(function() {
  const phoneButton = $('.phone-button');
  const phoneButton1 = $('.phone-button1');
  const phoneButton2 = $('.phone-button2');
  
  phoneButton.click(function() {
    phoneButton1.toggleClass('phone-button1-show');
    phoneButton2.toggleClass('phone-button2-show');
  });
  
  phoneButton1.click(function() {
    phoneButton1.removeClass('phone-button1-show');
    phoneButton2.removeClass('phone-button2-show');
  });
  
  phoneButton2.click(function() {
    phoneButton1.removeClass('phone-button1-show');
    phoneButton2.removeClass('phone-button2-show');
  });
});




	