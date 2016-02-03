  //COVER image

  var $windowHeight = $(window).height();

  $('#about-section-1').css(
    {
      "height": $windowHeight*0.75
    });

  $('#about-section-1 .text-landing').css(
    {
      "top":"33.3%",
    });

  /*resizing COVER image when resizing browser*/
  $(window).on('resize', function(){
    $windowHeight = $(window).height();
    console.log($windowHeight);

    $('#about-section-1').css(
      {
        "height": $windowHeight*0.75

      });

  });
