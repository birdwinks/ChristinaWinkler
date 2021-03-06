$( document ).ready(function() {
    //Test that JS works
    //console.log( "ready!" );
    //jQuery starts

// SMOOTH SCROLL
function scrollToSection(event) {

  // Log
  //console.log('Clicked on anchor element');

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



// STICKY MENU

$(window).scroll(function() {

	if ($(window).scrollTop() > 50 ){

 		$('.bg-menu').addClass('show');

  } else {

    $('.bg-menu').removeClass('show');

 	};
});




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





// FLIPPING SERVICE CARDS
$(".card").flip({
  axis: 'y',
  trigger: 'click'
});


// MANDATORY CHECKBOX CONTACT FORM
$(document).ready(function() {
    $('#contactform').submit(function() {
        if ($('form#contactform input:checkbox[name=confirm-privacy]').is(':checked')) {
            return true;
        } else {
            $('#confirm_terms_hint').text('Please try again - you need to check the box to move on');
            $('#confirm_terms_hint').css('font-weight', 'bold');
            return false;
        }
    });
});


//closing jQuery
});
