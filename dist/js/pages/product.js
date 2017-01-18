var fixed = 0,
scrolled = 0,
features = 0;
$(window).on('scroll', function() {
	scrolled = $(window).scrollTop();
	features = $('.hero-body').outerHeight() - $('.hero-body').offset().top;
	features +=35;
	if (features <= scrolled && fixed === 0) {
	  $('.hero-foot').addClass('remove-to-fix');
	  fixed = 1;
	 
	}
	if (features > scrolled && fixed === 1) {
		$('.hero-foot').removeClass('remove-to-fix');
		fixed = 0;
		
	}
});