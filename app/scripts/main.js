var spy = new ScrollSpy('#nav', {
	nav: '#nav a',
	className: 'active'
});

$(function(){
	$('#nav a').on('click', function(e){
		e.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top
		},300);
	});
});