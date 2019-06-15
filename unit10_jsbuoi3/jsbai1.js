var buttons =document.getElementsByTagName('button')[0];
var noneerror =document.getElementsByClassName('error');
function myFunction(n){
	noneerror[n].innerHTML="";
}
buttons.addEventListener('click',function(e){
	e.preventDefault();
	var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var regexPhoneNumber = /^(0|\+84)+(3\d{8}|9\d{8})$/;
	var regexPassWord=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	var names=document.getElementById('name').value;
	var emails=document.getElementById('email').value;
	var phonenumbers=document.getElementById('phone_number').value;
	var pass=document.getElementById('pass').value;
	var checks=document.getElementById('check').value
	var errors=document.getElementsByClassName('error');

	
	if(names.length==0){
		errors[0].innerHTML="Yêu cầu nhập đầy đủ họ tên";
	}else if(names.length<8){
		errors[0].innerHTML="Họ tên phải lớn hơn 8 kí tự";
	}else{
		errors[0].innerHTML="";
	}

	if (emails.length==0) {
		errors[1].innerHTML="Yêu cầu nhập email";
	}else if (!regexEmail.test(emails)) {
		errors[1].innerHTML="Email không đúng dạng  abc@domain.xy";
	}else{
		errors[1].innerHTML="";
	}

	if (phonenumbers.length==0) {
		errors[2].innerHTML="Yêu cầu nhập số điện thoại";
	}else if (!regexPhoneNumber.test(phonenumbers)) {
		errors[2].innerHTML="SĐT không đúng định dạng";
	}else{
		errors[2].innerHTML="";
	}

	if (pass.length==0) {
		errors[3].innerHTML="Yêu cầu nhập mật khẩu";
	}else if (!regexPassWord.test(pass)) {
		errors[3].innerHTML="Mật khẩu không đúng định dạng"
	}else{
		errors[3].innerHTML="";
	}

	if (checks.length==0) {
		errors[4].innerHTML="Yêu cầu xác nhận mật khẩu";
	}else if (!(pass===checks)) {
		errors[4].innerHTML="Không giống mật khẩu bạn vừa nhập"
	}else{
		errors[4].innerHTML="";
	}
	var k = 0
	for(var i=0; i<errors.length;i++){
		var dk = errors[i].innerHTML;
		if (dk!="") {
			k++
		}
	}
	if (k==0) {
		alert('Đăng kí thành công');

	}
});
