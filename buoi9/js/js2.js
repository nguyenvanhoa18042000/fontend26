// function change(){
// 	var input =document.getElementsByTagName('input');
// 	var type =input[0].type;
// 	if (type=="button") {
// 		input[0].type="text"
// 	}
// }

var input =document.getElementById('clickme');

//Cách 2 : ko đặt onclick trên thẻ nữa
input.addEventListener('click',function(){//onclick thì bỏ on đi
	if (input.type=='button') {
		input.type='text';
	}else{
		input.type='button';
	}
});//có thể đặt hàm r gọi hoặc viết trực tiếp như này.