
function mac_dinh(){
	document.getElementById("content").style.fontSize ='15px';
}
function tang_size(){
	var font_size=document.getElementById('content').style.fontSize;
	var x = parseFloat(font_size.replace("px",""));
	document.getElementById('content').style.fontSize=x*1.4+'px';
}
function giam_size(){
	var font_size=document.getElementById('content').style.fontSize;
	var x = parseFloat(font_size.replace("px",""));
	document.getElementById('content').style.fontSize=x*0.6+'px';
}
