$(document).ready(function() {

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();

  // nav height
  var $navbarHeight = $('nav').css('height');
  $('.container-first').css('margin-top', $navbarHeight);

  console.log($heightBrowser, $navbarHeight);

  //MASONRY
  //window on load because of the pics, suggestion from the tutorial
  $(window).on('load', function(){
    $('.grid').masonry({
      // options
      columnWidth: '.grid-item',
      itemSelector: '.grid-item'
    });
  });

});
