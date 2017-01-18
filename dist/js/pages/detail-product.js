// IsAwesome Options
var windowSize = $.IsAwesome.options.sreenSize,
	star = $.IsAwesome.options.starIcon,
	starO = $.IsAwesome.options.starEmptyIcon;

// desable elevateZoom on moblie
if( windowSize >= 768){
	$("#zoom").elevateZoom();
}

//rating stars
$(".rating .product-stars").click(function (e) {
    e.preventDefault();

    var $this = $(this).find("a > i");
    var fa = $this.hasClass("fa");
    var number = $(this).attr('id');
    if (fa) {
	    if(number >= 1){
	    	for(var i = 1; i <= number; i++){
	    		$('#'+i).find("a > i").removeClass(starO);
	    		$('#'+i).find("a > i").addClass(star);
	    	}
	    	for(var j = number; i <= 5; i++){
	    		$('#'+i).find("a > i").addClass(starO);
	    		$('#'+i).find("a > i").removeClass(star);
	    	}
	    }
	}
});