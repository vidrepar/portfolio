$(document).ready(function() {

  //COVER image

  var $windowHeight = $(window).height();

  $('#about-section-1').css(
    {
      "top": "33.3%",
      "height": $windowHeight
    });

  /*resizing COVER image when resizing browser*/
  $(window).on('resize', function(){
    $windowHeight = $(window).height();
    console.log($windowHeight);

    $('#about-section-1').css(
      {
        "top": "33.3%",
        "height": $windowHeight

      });

  });

});
