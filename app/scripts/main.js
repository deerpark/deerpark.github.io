var spy = new ScrollSpy('#nav', {
	nav: '#nav a',
	className: 'active'
});

var site = {};

site.init = function(callback){
	inView('#nav').once('enter', function(el){
		TweenMax.set(el, { y: -50 });
		TweenMax.to(el, 0.5, { opacity: 1, y: 0, delay: 0.5 });
	});
	inView('#footer').once('enter', function(el){
		TweenMax.set(el, { y: 50 });
		TweenMax.to(el, 0.5, { opacity: 1, y: 0, delay: 2.5 });
	});
	setTimeout(function(){
		inView('.section').on('enter', function(el){
			TweenMax.set($(el).find('.section-icon'), { opacity: 0, y: 30 });
			TweenMax.set($(el).find('.title'), { opacity: 0, y: 20 });
			TweenMax.set($(el).find('.subtitle'), { opacity: 0, y: 15 });
			TweenMax.set($(el).find('.section-body'), { opacity: 0 });

			TweenMax.to($(el).find('.section-icon'), 0.5, { opacity: 1, y: 0, delay: 0.5 });
			TweenMax.to($(el).find('.title'), 0.5, { opacity: 1, y: 0, delay: 0.7 });
			TweenMax.to($(el).find('.subtitle'), 0.5, { opacity: 1, y: 0, delay: 0.8 });
			TweenMax.to($(el).find('.section-body'), 1, { opacity: 1, delay: 1 });
		}).on('exit', function(el){
			TweenMax.set($(el).find('.section-icon'), { opacity: 0, y: -30 });
			TweenMax.set($(el).find('.title'), { opacity: 0, y: -20 });
			TweenMax.set($(el).find('.subtitle'), { opacity: 0, y: -15 });
			TweenMax.set($(el).find('.section-body'), { opacity: 0 });
		});
	}, 1000);
	if(callback) callback();
}

$(function(){
	$('#nav a').on('click', function(e){
		e.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top
		},300);
	});
	setTimeout(function(){
		site.init(function(){window.scrollTo(0,1);});
	}, 1000);
});