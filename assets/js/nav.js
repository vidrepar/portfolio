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


  //ACTIVE NAVIGATION CODE
  $(function(){
    var url = window.location.href;
    var page = url.substr(url.lastIndexOf('/')+1);
    var pageProjects = url.substr(url.lastIndexOf('/')-2);

    //on project presentation page
    var parts = url.split("/");
    var pageProjects = parts[parts.length - 2];

    //console.log(page, pageProjects);

    if(page === ''){
      //console.log(document.getElementById("home"));
      $('#home').addClass('active');
    }else if(page === 'projects' || pageProjects === 'projects'){
      //console.log(document.getElementById("portfolio"));
      $('#portfolio').addClass('active');
    }else if(page === 'about'){
      //console.log(document.getElementById("about"));
      $('#about').addClass('active');
    }else if(page === 'contact'){
      //console.log(document.getElementById("contact"));
      $('#contact').addClass('active');
    }

    $('.cemenu a[href*="'+page+'"]').addClass('active');
  });

});
