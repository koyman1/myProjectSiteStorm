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

	// Show/hide content on "Show more" button click
	const showMoreBtns = document.querySelectorAll('.show-more');
	showMoreBtns.forEach((btn) => {
	  btn.addEventListener('click', function() {
	    const content = this.nextElementSibling;
	    if (content.style.display === 'none') {
	      content.style.display = 'block';
	      this.textContent = 'Показать меньше';
	    } else {
	      content.style.display = 'none';
	      this.textContent = 'Показать больше';
	    }
	  });
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

});
