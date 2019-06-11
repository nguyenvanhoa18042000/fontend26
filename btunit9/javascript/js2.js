var checkbox=document.getElementsByClassName('check');
function checkAll(){
	for(var i=0;i<checkbox.length;i++){
   		checkbox[i].checked=true;
	}
}
function unCheckAll(){
	for(var i=0;i<checkbox.length;i++){
   		checkbox[i].checked =false;
	}
}
