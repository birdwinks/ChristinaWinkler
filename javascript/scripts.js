$( document ).ready(function() {
    //Test that JS works
    //console.log( "ready!" );
    //jQuery starts

// SMOOTH SCROLL

function scrollToSection(event) {

  // Log
  console.log('Clicked on anchor element');

  // Prevent jumping to the section (default behaviour)
  event.preventDefault();

  // Get anchor element hash
  var element = event.currentTarget,
      hash = element.hash;

  // Scroll the body and HTML to the ID equal to hash
  $('html, body').animate({

    // Find the offset of the targeted element on the page
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Set URL to clicked hash
    window.location.hash = hash;

  });

}

// Bind events
$('a').on('click', scrollToSection);



// MOBILE MENU
function changeBodyClass(event) {

  // Log
  console.log('Clicked on toggle menu class');

  // Prevent default event (clicking a link)
  event.preventDefault();

  // Toggle body class
  $('#container').toggleClass('mobile-menu-visible');

}

// Bind events
$('a').on('click', changeBodyClass);



// ADD SLIDER
// Send a message to console after window load
console.log('Window loaded!');

// Assign flexslider functoin to class .flexslider
$('.flexslider').flexslider({

  // Customize flexslider properties
  animation: "slide",
  slideshowSpeed: 5000,
  animationSpeed: 1000,
  slideshow: false,
  directionNav: false

});

//closing jQuery
});
