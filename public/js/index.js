$(document).ready(function() {

  //FULLPAGE.JS
  $('#fullpage').fullpage({

      navigation: true

    });

  //MAGNIFIC POPUP
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#test-popup').height($heightBrowser);

});

