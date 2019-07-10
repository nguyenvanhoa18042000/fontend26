$('.send-message').click(function(){
	e.preventDefault();
	$('#form1').validate({
		rules: {
			firstname:{
				required:true,
			},
			lastname:{
				required:true,
			},
			email:{
				required:true,
			}
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
				required:'Email chưa đúng định dạng',
			}
			subject:{
				required:'Bạn chưa nhập subject',
			}
		},
	});
});