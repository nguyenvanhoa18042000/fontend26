$(document).ready(function(){
	$('.btn').click(function(){
		$('.content').addClass('show');
		$('.bg').addClass('show');

	});
	$('.content>button').click(function(){
		$('.content').removeClass('show');
		$('.bg').removeClass('show');
	});
	$('.bg').click(function(){
		$('.content').removeClass('show');
		$('.bg').removeClass('show');
	});
});