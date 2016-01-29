$(document).ready(function() {

  //CLOSE/HIDE MENU
  $("#hamburger").click(function(){
    $("#popup").show();
  });

  $("#close").click(function(){
    $("#popup").hide();
  });

  // height for dynamic POPUP background
  var $heightBrowser = $(window).height();
  $('#popup').height($heightBrowser);

});
