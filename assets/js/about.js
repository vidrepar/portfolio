  //COVER image

  var $windowHeight = $(window).height();

  $('#about-section-1').css(
    {
      "height": $windowHeight*0.75
    });

  $('#about-section-1 .text-landing').css(
    {
      "top":"33.3%"
    });

  $('#arrow-nav').css({
    "left": $(window).width()*0.5 - $('#arrow-nav').width()*0.5
  });

  /*resizing COVER image when resizing browser*/
  $(window).on('resize', function(){
    $windowHeight = $(window).height();
    console.log($windowHeight);

    $('#about-section-1').css(
      {
        "height": $windowHeight*0.75
      });

    $('#arrow-nav').css({
      "left": $(window).width()*0.5 - $('#arrow-nav').width()*0.5
    });

  });


  var aboutText = $('#text-about-cv p');
  var aboutTextLength = $('#text-about-cv p').text().length;

  $('#text-about-cv p').readmore({
    speed: 75,
    collapsedHeight: 110,
    moreLink: '<a href="#"><div class="btn">Read more</div></a>',
    lessLink: '<a href="#"><div class="btn">Read less</div></a>'
  });




  $("#arrow-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#text-about h2").offset().top},
      'slow');
  });


