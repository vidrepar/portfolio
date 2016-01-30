$(document).ready(function() {

  $("#popup").hide();
  $("#hamburger").on("click", function(){
    $("#popup").fadeIn(100, function(){
      $("#close").on("click", function(){
        $("#popup").fadeOut(100);
      });
    });
  });

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#popup').height($heightBrowser+300);

});
