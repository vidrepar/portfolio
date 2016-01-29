$(document).ready(function() {

  $("#popup").hide();
  $("#hamburger").on("click", function(){
    $("#popup").fadeIn(150, function(){
      $("#close").on("click", function(){
        $("#popup").fadeOut(150);
      });
    });
  });

  ////CLOSE/HIDE MENU
  //$("#hamburger").click(function(){
  //  $("#popup").show();
  //});
  //
  //$("#close").click(function(){
  //  $("#popup").hide();
  //});

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#popup').height($heightBrowser);

});
