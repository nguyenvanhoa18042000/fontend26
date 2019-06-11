function clickId(){
	var the_p=document.getElementById('the_p');
	//alert(the_p.innerHTML);
	the_p.innerHTML;
	document.write(the_p.innerHTML);// gán nd vào biến the_p
	//the_p.innerHTML="WEB-26"//thay đổi nd của the_p
	//ko ddc 'the_p.innerHTML'
}
function clickClass(){
	var class_mb=docume nt.getElementsByClassName('mb');
	class_mb[0].style.color="red";
}
function clickTags(){
	var span =document.getElementsByTagsName('span');
	span[0].style.color="blue";
}
