  //MASONRY
  //window on load because of the pics, suggestion from the tutorial
  $(window).on('load', function(){
    $('.grid').masonry({
      // options
      columnWidth: '.grid-item',
      itemSelector: '.grid-item'
    });
  });

/*resize function*/
  $(window).resize(function(){
    $widthBrowser = $(window).width();
    console.log($widthBrowser);
  });

  $('.grid-item').css();

  $(".grid").hover(function() {
    $(this).css("color","red")
  });
