$(document).ready(function(){
	$('.default').show();
	$('#step1').css('background','#0a81c6');
	$('.pre').click(function(e){
		e.preventDefault()
		$('.content-steps').hide();
		$(this).parents('.tabs').prev().children().children().show();
		$('h3').css('background','#2184be7a');
		$(this).parents('.tabs').prev().children().find('.steps').children().css('background','#0a81c6');
	});
	$('#next-of-steps1').click(function(e){
		$('h3').css('background','#2184be7a');
		$('#step2').css('background','#0a81c6');
		e.preventDefault();
		$('#form1').validate({
			rules: {
				userName:{
					required:true,
				},
				password:{
					required:true,
					minlength:6
				},
				confirm:{
					required:true,
					equalTo:'#password',
					minlength:6
				}
			},
			messages: {
				userName:{
					required:'Bạn chưa nhập userName',
				},
				password:{
					required:'Bạn chưa nhập password',
					minlength:'password phải có ít nhất 6 kí tự'
				},
				confirm:{
					required:'Bạn chưa nhập confirm password',
					equalTo:'Confirm password phải giống password',
					minlength:'Confirm password phải có ít nhất 6 kí tự'
				}
			}
		});
		if ($("#form1").valid()) {
			e.preventDefault()
			$('.step12').click(function(){
				$('.content-steps').hide();
				$(this).parent().next().show();
				$('h3').css("background","#2184be7a");
				$(this).css("background","#0a81c6");

			});
			$('.content-steps').hide();
			$(this).parents('.tabs').next().children().children().show();
		}else{
			$('h3').css("background","#2184be7a");
			$('#step1').css("background","#eb1b1bd6");
		}
	});

	$('#next-of-steps2').click(function(e){
		$('#form2').validate({
			rules: {
				firstname:{
					required:true,
				},
				lastname:{
					required:true,
				},
				email:{
					required:true,
				},
				address: {
					required:true,
				},
				age: {
					required:true,
					maxlength:2
				}
			},
			messages: {
				firstname:{
					required:'Bạn chưa nhập First name',
				},
				lastname:{
					required:'Bạn chưa nhập Last name',
				},
				email:{
					required:'Email không đúng định dạng',
				},
				address: {
					required:'Bạn chưa nhập Address',
				},
				age: {
					required:'Bạn chưa nhập Age',
					maxlength:'Dưới 100 tuổi là đủ r đ.ca ạ! ^-^'
				}
			}
		});
		var age=$('#age').val();
		if ($("#form2").valid() && age<18) {
			$('h3').css('background','#2184be7a');
			$('#step3').css('background','#0a81c6');
			e.preventDefault();
			$('.step123').click(function(){
				$('h3').css('background','#2184be7a');
				$(this).css('background','#0a81c6');
				$('.content-steps').hide();
				$(this).parent().next().show();
			});

			$('.pre').click(function(e){
				e.preventDefault()
				$('h3').css('background','#2184be7a');
				$(this).parents('.tabs').prev().children().find('.steps').children().css('background','#0a81c6')
			});
			$('.content-steps').hide();
			$(this).parents('.tabs').next().children().children().show();
		}else if($("#form2").valid() && age>=18){
			$('h3').css('background','#2184be7a');
			$('#step4').css('background','#0a81c6');
			$('.step124').click(function(){
				$('h3').css('background','#2184be7a');
				$(this).css('background','#0a81c6');
				$('.content-steps').hide();
				$(this).parent().next().show();
			});
			e.preventDefault();
			$('.content-steps').hide();
			$(this).parents('.tabs').siblings('.tab4').children().children().show();
			$('.pre').click(function(e){
				e.preventDefault()
				$('.content-steps').hide();
				$(this).parents('.tabs').prev().prev().children().children().show();
				$('h3').css('background','#2184be7a');
				$('#step2').css('background','#0a81c6')
				$('.pre').click(function(e){
					e.preventDefault()
					$('h3').css('background','#2184be7a');
					$('#step1').css('background','#0a81c6')
					$('.content-steps').hide();
					$(this).parents('.tabs').prev().children().children().show();
				});
			});
		}else{
			$('h3').css("background","#2184be7a");
			$('#step2').css("background","#eb1b1bd6");
		}	
	});
	$('#next-of-steps4').click(function(e){
		$('#form4').validate({
			rules: {
				checkbox: {
					
					required:true,
				}
			},
			messages: {
				checkbox: {
					required:'Bạn chưa đồng ý với các điều khoản và điều kiện của chúng tôi',
				}
			}
		});
		if ($('#form4').valid()) {
			e.preventDefault();
			alert('submitted');
			$('#step4').css('background','#2184be7a');
		}else{
			$('h3').css("background","#2184be7a");
			$('#step4').css("background","#eb1b1bd6");
		}
	});
});