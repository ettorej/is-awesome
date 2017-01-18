$( "#tab-style" ).change(function(){
	$('#tabs-example').removeClass().addClass('tabs');
	$('.icon-example').css('display', 'none');
	var style = $(this).find('option:selected').text();
	switch (style) {
		case 'icons':
			$('.icon-example').css('display', 'block');
			break;
		case 'default':
			$('#tabs-example').removeClass().addClass('tabs');
			break;
		case 'centered and boxed':
			$('#tabs-example').addClass('is-centered').addClass('is-boxed');
			break;
		default:
			$('#tabs-example').addClass('is-'+style);
			break;
	}
});