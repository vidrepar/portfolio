$(document).ready(function() {

  //FULLPAGE.JS
  $('#fullpage').fullpage({

      navigation: true

    });

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#test-popup').height($heightBrowser);

});

