
/* Responsive Nav Menu */

const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    });
};

navMenu();

// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function() {
	
	// setTimeout to simulate the delay from a real page load
	setTimeout(imageLoad, 1000);
	
});

function imageLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop over each card image
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		// change the src of the content image to load the new high res photo
		content_image.src = image_url;
		
		// listen for load event when the new photo is finished loading
		content_image.addEventListener('load', function() {
			// swap out the visible background image with the new fully downloaded photo
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			// add a class to remove the blur filter to smoothly transition the image change
			card_image.className = card_image.className + 'is-loaded';
		});
		
	});
	
}

// function to add a class "open" to the details html tag only when the viewport of the browser is greater than 768px

function openDetails() {
	let details = document.querySelectorAll('details');
	// loop over each details element
	details.forEach(function(detail) {
			// if the viewport is greater than 768px
			if (window.innerWidth > 768) {
				// add a class "open" 
				detail.setAttribute("open", true);

			}else {
				// remove the class "open"
				detail.removeAttribute("open");
			}
	});
}

openDetails();