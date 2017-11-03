$(function(){

	$(document).on('click','#btn-footer', function(){
		$(this).parents('.site-footer').toggleClass('is-visible');
	});

	setTimeout(function(){ 

		var $header = document.querySelector('.site-header'),
			$svg = document.querySelector('.shape'),
			svgPath = $svg.querySelector('path');
		
		anime({
			targets: $header,
			translateY: {
				value: '-200vh', 
				duration: 2000,
				easing: 'easeInOutQuad'
			}
		});

		anime({
			targets: svgPath,
			duration: 1200, 
			easing: 'linear',
			d: svgPath.getAttribute('pathdata:id')
		});

	}, 2000);

});