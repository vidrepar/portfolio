$(document).ready(function() {

    //FULLPAGE.JS
  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false
  });

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#test-popup').height($heightBrowser);

});
