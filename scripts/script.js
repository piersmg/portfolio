$(".transition").click(function(e) {
	e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 500, linkUrl);
  $('.stripe').toggleClass('transition-active');
});