$(document).ready(function() {

  //COVER image
  //NOT WORKING YET
  var $heightBrowser = $(window).height();
  var heightBrowserNew = $heightBrowser - $heightBrowser*0.3;
  $('#about-section-1').height(heightBrowserNew);
  $('#about-section-1 .text-landing').css('top', '30%'); //make it more right...

  console.log(heightBrowserNew);

});
