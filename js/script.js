(function($){

	$('#defaultCountdown').countdown({until: new Date(2013, 6-1, 5)});


	//$('table tr:odd').addClass('odd');
	
	//$('.top .login a').click(function() {
	//	$('.login-form').slideToggle('slow');
	//	return false;
	//}); 
	
	$('.tooltip').tipsy({gravity: 's', fade: true}); // nw | n | ne | w | e | sw | s | se
		
	// Tabs 
	jQuery('.tab-nav ul li a').click(function() {
		var href = jQuery(this).attr("href");
		jQuery('.tab').hide();
		jQuery('.tab-nav ul li').removeClass('active');
		jQuery(this).parent().addClass('active');
		jQuery(href).show();
		jQuery.cookie('open_tab', href);
		return false;
	});
	if (jQuery('.tab-nav ul li.active').size() > 0) {
		jQuery('.tab-nav ul li.active a').click();
	} else {
		jQuery('.tab-nav ul li:first a').click();
	}
	
	// Lightbox
	
	$("a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png']").fancybox({
		'overlayShow'	: true,
	});
	$("a[href$='.pdf'], a[href$='.css'], a[href$='.txt'], a[href$='.mov'], a[href$='.doc'], a[href$='.xls'], a[href$='.swf']").fancybox({
		'width'				: '75%',
		'height'			: '75%',
		'autoScale'			: false,
		'type'				: 'iframe'
	});
	
	
})(window.jQuery);