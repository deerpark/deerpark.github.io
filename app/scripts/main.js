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
			if(el.id!='profile' && $('#profile .section-icon').data('play') == 1) {
				site.closeProfile();
			}
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

site.openProfile = function() {
	var _this = '#profile .section-icon';
	$(_this).data('play',-1);
	TweenMax.to($(_this).find('.fa-close'), 0.3, { opacity: 1, scale: 1 });
	TweenMax.to($(_this).find('.fa-play'), 0.2, { opacity: 0, scale: 0 });
	TweenMax.to($('#nav'), 0.3, { opacity: 0, y: -50, delay: 0.2 });
	TweenMax.to($('#footer'), 0.3, { opacity: 0, y: 50, delay: 0.2 });
	TweenMax.to($('#profile .section-body'), 0.1, { opacity: 1, y: 174, delay: 0.3 });
	TweenMax.to($('#profile .subtitle'), 0.2, { opacity: 1, y: 174, delay: 0.5 });
	TweenMax.to($('#profile .title'), 0.3, { opacity: 1, y: 174, delay: 0.53 });
	TweenMax.to($(_this), 0.2, { scale: 1.2, delay: 0.7 });
	TweenMax.to($(_this), 0.1, { scale: 1, delay: 0.8 });
	TweenMax.staggerTo($('.pieces li'), 0.3, {
		cycle : {
			x : [0,140,200,140,0,-140,-200,-140],
			y : [-200,-140,0,140,200,140,0,-140]
		}, opacity: 1, delay: 0.6, ease: Power4.easeOut, onComplete: function(){
			$('#profile .section-icon').data('play',1);
		}
	}, 0.02);
}

site.closeProfile = function() {
	var _this = '#profile .section-icon';
	$(_this).data('play',-1);
	TweenMax.to($(_this).find('.fa-play'), 0.3, { opacity: 1, scale: 1 });
	TweenMax.to($(_this).find('.fa-close'), 0.2, { opacity: 0, scale: 0 });
	TweenMax.to($(_this), 0.2, { scale: 1.2, delay: 0.2 });
	TweenMax.to($(_this), 0.1, { scale: 1, delay: 0.3 });
	TweenMax.staggerTo($('.pieces li'), 0.3, {
		x: 0, y: 0, opacity: 0, delay: 0.2, ease: Power4.easeOut
	}, 0.02);
	TweenMax.to($('#profile .title'), 0.1, { opacity: 1, y: 0, delay: 0.3 });
	TweenMax.to($('#profile .subtitle'), 0.2, { opacity: 1, y: 0, delay: 0.35 });
	TweenMax.to($('#profile .section-body'), 0.3, { opacity: 1, y: 0, delay: 0.55 });
	TweenMax.to($('#footer'), 0.3, { opacity: 1, y: 0, delay: 0.7 });
	TweenMax.to($('#nav'), 0.3, { opacity: 1, y: 0, delay: 0.7, onComplete: function(){
		$('#profile .section-icon').data('play',0);
	}});
}

$(function(){
    $('.thumb > img').each(function(){
		console.log($(this).parent().height());
		var p_width=$(this).parent().width(),
		p_height=$(this).parent().height(),
		n_width=$(this).width(),
		n_height=$(this).height(),
		p_aspect = p_width / p_height,
		n_aspcet = n_width / n_height;
		if(n_aspcet < p_aspect){ 
        	$(this).width(p_width)
			$(this).height('auto')
			$(this).css({'bottom':(p_width / n_aspcet - p_height) / 2}); 
		}else{
        	$(this).width('auto')
			$(this).height(p_height)
			$(this).css({'right':(p_height * n_aspcet-p_width)/2}); 
		}
    });
	$('#nav a').on('click', function(e){
		e.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top
		},300);
	});
	$('#profile .section-icon').data('play',0).on('click', function(e){
		e.preventDefault();
		if($(this).data('play') == 0) {
			site.openProfile();
		} else if($(this).data('play') == 1) {
			site.closeProfile();
		}
	});
	setTimeout(function(){
		site.init(function(){window.scrollTo(0,1);});
	}, 1000);
});