_init();

var star = $.IsAwesome.options.starIcon,
    starO = $.IsAwesome.options.starEmptyIcon;

$(".mail-stars").click(function (e) {
    e.preventDefault();
    var $this = $(this).find("a > i");
    var fa = $this.hasClass("fa");

    if (fa) {
      $this.toggleClass(star);
      $this.toggleClass(starO);
    }
    
  });

$.IsAwesome.scrolling('#scrolling-mail', '400px');

if(typeof $('#compose-textarea').val() != 'undefined'){
	CKEDITOR.replace( 'compose-textarea' );
}