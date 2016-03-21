var aboutText = $('#project-description div');
var aboutTextLength = $('#project-description div').text().length;

$('#project-description div').readmore({
  speed: 75,
  collapsedHeight: 500,
  moreLink: '<a href="#"><div class="btn">Read more</div></a>',
  lessLink: '<a href="#"><div class="btn">Read less</div></a>'
});
