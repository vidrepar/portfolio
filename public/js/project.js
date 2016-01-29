$(document).ready(function() {



    //FULLPAGE.JS
  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false
  });

  //MAGNIFIC POPUP
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true
    // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#test-popup').height($heightBrowser);

  // nav height
  var $navbarHeight = $('nav').css('height');
  $('.container-first').css('margin-top', $navbarHeight);

  console.log($heightBrowser, $navbarHeight);

  //MASONRY
  //window on load because of the pics, suggestion from the tutorial
  $(window).on('load', function(){
    $('div.grid').masonry({
      // options
      columnWidth: 'div.grid-item',
      itemSelector: 'div.grid-item'
    });
  });

});
