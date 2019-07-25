$(".transition").click(function(e) {
	e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 300, linkUrl);
  $('.stripe').toggleClass('transition-active');
});

$(function() {
	var referrer = document.referrer;
  if (referrer == 'https://piersmg.github.io/') {
  	$('.pink-cover').animate(
    {width: '0px'},
    {height: '0px'},
    {top: '-200px'},
    {right: '45px'}, 900);
  }
});