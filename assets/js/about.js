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

  /*$('#arrow-nav').css(
    {
      "top": $windowHeight*0.20
    });*/

  /*resizing COVER image when resizing browser*/
  $(window).on('resize', function(){
    $windowHeight = $(window).height();
    console.log($windowHeight);

    $('#about-section-1').css(
      {
        "height": $windowHeight*0.75
      });
  /*$('#arrow-nav').css(
      {
        "top": $windowHeight*0.20
      });*/

  });


  var aboutText = $('#text-about-cv p');
  var aboutTextLength = $('#text-about-cv p').text().length;
  console.log(aboutTextLength);


  $('#text-about-cv p').readmore({
    speed: 75,
    moreLink: '<a href="#"><div class="btn">Read more</div></a>',
    lessLink: '<a href="#"><div class="btn">Read less</div></a>'
  });



