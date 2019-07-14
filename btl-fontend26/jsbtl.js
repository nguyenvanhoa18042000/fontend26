$(document).ready(function() {

	$('body').scrollspy({ target:'.navbar'});
	$.simpleTicker($("#news-ticker-roll"),{
		delay : 2000,
		effectType : 'roll'
	});
	$('.counter').counterUp({
		delay: 15,
		time: 1500
	});
	$('.carousel').carousel({
		interval: 2500
	});
	$('#say').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dotsEach:2,
		autoplay:false,
		autoplayHoverPause:false,
		autoplayTimeout:1500,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('#test').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
	    // dotsEach:true,
	    autoplay:false,
	    autoplayHoverPause:false,
	    autoplayTimeout:1500,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	300:{
	    		items:2,
	    	},
	    	600:{
	    		items:3,
	    	},
	    	992:{
	    		items:4,
	    	},
	    }
	});

	$('.edit-js-btn').click(function(){
		$('.card-header').removeClass('default');
		$(this).parents('.card-header').addClass('default');
	});
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	$('.container-images').isotope({
		itemSelector: '.box',
		layoutMode: 'fitRows'
	});
	$('.menu2 li').click(function() {
		$('.menu2 li').removeClass('default-li');
		$(this).addClass('default-li');
		var type = $(this).attr('type');
		type = '.'+type;
		$('.container-images').isotope({
			filter:type      
		});
	});
	$('.send-message').click(function(){
		$('#my-form').validate({
			rules: {
				firstname:{
					required:true,
				},
				lastname:{
					required:true,
				},
				email:{
					required:true,
					email:true,
				},
				subject:{
					required:true,
				}
			},
			messages: {
				firstname:{
					required:'Bạn chưa nhập first name',
				},
				lastname:{
					required:'Bạn chưa nhập last name',
				},
				email:{
					required:'Bạn chưa nhập Email',
					email:'Email chưa đúng định dạng',
				},
				subject:{
					required:'Bạn chưa nhập subject',
				},
			},	
		});
	});

	$('.input input').click(function(){
		$(this).blur(function(){
			var check =$(this).val();
			if (check!="") {
				$(this).css('border','2px solid #007bff');
				$(this).siblings('.title-of-input').addClass('after-click');
			}
		});
	});
	$(window).scroll(function(){
		if ($(this).scrollTop()>300) {
			$('.up-top').fadeIn();
		}else{
			$('.up-top').fadeOut();
		}
	});
	$('.up-top').click(function(){
		$('html').animate({scrollTop:0},800);
	});
});
