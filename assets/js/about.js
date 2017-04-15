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

  // Resizing COVER image when resizing browser
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

  $('#text-about-cv .paragraph').readmore({
    speed: 75,
    collapsedHeight: 113,
    moreLink: '<a href="#"><div class="btn-more"><span>Read more</span></div></a>',
    lessLink: '<a href="#"><div class="btn-more"><span>Read less</span></div></a>'
  });




  $("#arrow-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#text-about h2").offset().top},
      'slow');
  });


