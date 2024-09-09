$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Show/hide header on scroll
	window.onscroll = function showHeader(){
		var header = document.querySelector('.header');
		if(window.pageYOffset > 100){
			header.classList.add('header_fixed');
		}else{
			header.classList.remove('header_fixed');
		}
	};

	// Initialize Swiper slider
	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
		mousewheel: true,
		keyboard: true,
	});

	// Show/hide phone form on button click
	const phoneButton = document.querySelector('.phone-button');
	const phoneForm = document.querySelector('.phone-form');
	const closeButton = document.querySelector('.close-button');
	phoneButton.addEventListener('click', function() {
	  phoneForm.style.display = 'block';
	});
	closeButton.addEventListener('click', function() {
	  phoneForm.style.display = 'none';
	});

	// Show/hide mobile menu on burger icon click
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	const blocks = document.querySelectorAll('.service');

function fadeIn() {
  blocks.forEach(service => {
    const serviceTop = service.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (serviceTop < windowHeight) {
      service.classList.add('fade-in');
    } else {
      service.classList.remove('fade-in');
    }
  });
}

window.addEventListener('scroll', fadeIn);


});
