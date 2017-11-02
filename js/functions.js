$(function(){

	$(document).on('click','#btn-footer', function(){
		$(this).parents('.site-footer').toggleClass('is-visible');
	});

});