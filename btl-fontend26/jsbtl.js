$(document).ready(function() {
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
	    	1000:{
	    		items:4,
	    	},
	    }
	});

	$('.edit-js-btn').click(function(){
		$('.add-bg-yellow').css('background-color','white');
		$('.add-bg-yellow').children().css('color','black');
		$('.add-bg-yellow').find('button').css({'color':'black','font-weight':'normal'});
		$(this).css({'color':'white','font-weight':'bold','text-decoration':'none'});
		$(this).parents('.card-header').css('background-color','#FEC924');
		$(this).parent().siblings().css('color','white');
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
	$('.content').isotope({
		itemSelector: 'img'
	});
	$('.content').isotope({
		itemSelector: 'img'
	});
	$('.menu2 li').click(function() {
		$('.menu2 li').css({
			'background':'#f9f6f6',
			'color':'black',
			'font-weight':'normal'
		});
		$(this).css({
			'background':'#ffa500c2',
			'color':'white',
			'font-weight':'bold'
		});
		var type = $(this).attr('type');
		type = '.'+type;
		$('.content').isotope({
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
		// var check2 = $('#message').val();
		// alert(check2);
		// if (check2=="") {
		// 	alert('abc');
		// }else{
		// 	//alert('acb');
		// }
	});
	$('.input input').click(function(){
		$(this).blur(function(){
			var check =$(this).val();
			if (check!="") {
				$(this).css('border','2px solid #007bff');
				$(this).next().addClass('after-click');
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
