$(".transition").click(function(e) {
	e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 300, linkUrl);
  $('.stripe').toggleClass('transition-active');
});

$(function() {
	var referrer = document.referrer;
  if (referrer != 'https://piersmg.github.io/') {
    $('.pink-cover').css( "display", "none" );
  }
  if (referrer == 'https://piersmg.github.io/') {
    $('.pink-cover').toggleClass('pink-transition-active');
  }
});