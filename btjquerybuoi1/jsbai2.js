$(document).ready(function(){
	$('#add').on('click',function(){
		var input =$('#input').val();
		$('#content').append(
		`<tr class="row">
			<td class="checkbox"></td>
			<td class="content-add">`+input+`</td>
			<td class="delete">&times;</td>
		</tr>`
		);
		$('#input').val('');
	});
	$('body').on('click','.delete',function(){
		$(this).parent().remove();
	});
	$('body').on('click','.row',function(){
		var checkbox=$(this).children('.checkbox').html();
		if (checkbox=='') {
			$(this).children('.checkbox').html('&radic;');
			$(this).css({'background-color':'#63555596','color':'white'});
			$(this).children().eq(1).css({'color':'white','text-decoration':'line-through'});
			
		}else{

		}

	});
});

